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

exports.getByConversation = (req, res, next) => {
    Message.find()
        .where('conversationId').equals(req.params.conversationId)
        .sort({
            sentHour: 'desc'
        })
        .skip(req.body.messageOffset)
        .limit(100)
        .exec()
        .then(docs => {
            const messages = docs.map(doc => {
                return {
                    _id: doc._id,
                    conversationId: doc.conversationId,
                    author: doc.author,
                    body: doc.body,
                    sentHout: doc.sentHour
                }
            });
            res.status(200).json(messages);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}