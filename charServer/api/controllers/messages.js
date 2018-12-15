const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Message = require('../models/message');

exports.sendMessage = (req, res, next) => {
    const message = new Message({
        _id: mongoose.Types.ObjectId(),
        conversationId: req.body.conversationId,
        author: req.body.author,
        sentHour: req.body.sentHour,
        body: req.body.body
    });
    message.save()
        .then(result => {
            console.log(message);
            res.status(201).json({
                message: 'message sent succesfully'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}