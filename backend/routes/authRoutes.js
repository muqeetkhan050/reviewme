


// const express = require('express');
// const { signup, login } = require('../controllers/authController');
// const router = express.Router();

// router.post('/signup', signup);
// router.post('/login', login);

// module.exports = router;

// backend/routes/authRoutes.js
const express = require('express');
const { signup, login, getUserById } = require('../controllers/authController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user/:userId', auth, getUserById); // New endpoint

module.exports = router;