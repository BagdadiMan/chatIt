const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    conversationId: { 
        type: mongoose.Schema.ObjectId,
        refs: 'Conversations',
        required: true
    },
    author: { 
        type: mongoose.Schema.ObjectId,
        refs: 'Users',
        required: true
    },
    body: { 
        type: String,
        required: true
    },
    sentHour: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Messages', userSchema);