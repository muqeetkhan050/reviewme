const express = require('express');
const {loadFeed} = require('../controllers/feedController');
const router = express.Router();    

router.get('/feed', loadFeed);

module.exports = router;