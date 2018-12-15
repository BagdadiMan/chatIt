const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Only accepts .png files'), false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

const userController = require('../controllers/users');

router.post('/signup', upload.single('profileImage'), userController.signUp);
router.post('/login', userController.login);
router.get('/:username', checkAuth, userController.getUser);
router.post('/contact', checkAuth, userController.addContact);

module.exports = router;