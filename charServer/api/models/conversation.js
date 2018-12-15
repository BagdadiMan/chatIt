const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    members: [{ type: mongoose.Schema.ObjectId, ref: 'Users' }]
});

module.exports = mongoose.model('Conversations', conversationSchema);