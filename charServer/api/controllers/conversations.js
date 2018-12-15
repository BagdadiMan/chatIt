const mongoose = require('mongoose');

const Conversation = require('../models/conversation');

exports.createConversation = (req, res, next) => {
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

exports.addMember = (req, res, next) => {
    const conversationToEdit = {
        _id: req.body.conversationId
    };
    const memberToAdd = req.body.memberToAdd;
    Conversation.findOne({ _id: conversationToEdit})
        .exec()
        .then(doc => {
            if (doc.members.map(member => member.toString()).includes(memberToAdd)) {
                res.status(409).json({
                    message: 'member alreay in conversation'
                });
            } else {
                Conversation.findOneAndUpdate(conversationToEdit, {
                        $push: {
                            members: req.body.memberToAdd
                        }
                    })
                    .exec()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: 'member added successfuly'
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
            }
        })
}