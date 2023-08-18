const express = require('express');
const { NewMessage, getMessage } = require('./MessageController');

const router = express.Router();

// Defining API routes

router.post("/", NewMessage)
router.get('/:chat_id', getMessage);

module.exports = router;
