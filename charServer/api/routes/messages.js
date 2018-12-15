const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const messagesController = require('../controllers/messages');

router.post('/text', checkAuth, messagesController.sendMessage);
router.get('/:conversationId', checkAuth, messagesController.getByConversation);

module.exports = router;