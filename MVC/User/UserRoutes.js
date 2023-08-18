const express = require('express');
const { createUser} = require('./UserController');

const router = express.Router();

// Create a new user
router.post('/', createUser);

module.exports = router;
