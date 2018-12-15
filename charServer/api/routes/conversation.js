const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const conversationController = require('../controllers/conversations');

router.post('/', checkAuth, conversationController.createConversation);
router.put('/member', checkAuth, conversationController.addMember);

module.exports = router;