const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const User = require('../models/user');
const Conversation = require('../models/conversation');

exports.signUp = (req, res, next) => {
    User.find({
            email: req.body.email
        })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'email exists'
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            _id: mongoose.Types.ObjectId(),
                            email: req.body.email,
                            username: req.body.username,
                            password: hash,
                        });
                        user.profileImage.data = fs.readFileSync(req.file.path);
                        user.profileImage.contentType = 'image/png';
                        user.save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'User created'
                                })
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                })
                            })
                    }
                });
            }
        });
}

exports.login = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if(user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            } else {
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if(!result) {
                        return res.status(401).json({
                            message: 'Auth failed'
                        })
                    } else {
                        const token = jwt.sign(
                            {
                              email: user[0].email,
                              userId: user[0]._id
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1h"
                            }
                        );
                        return res.status(200).json({
                            message: 'Auth successful',
                            token: token
                        })
                    }
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.getUser = (req, res, next) => {
    User.find({ username: req.params.username })
        .select("username email profileImage")
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}

exports.addContact = (req, res, next ) => {
    const conversation = new Conversation({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        members: req.body.members
    });
    conversation.save()
        .then(result => {
            console.log(conversation);
            res.status(201).json({
                message: 'Conversation created'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}