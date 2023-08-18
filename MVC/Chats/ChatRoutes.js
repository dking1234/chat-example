const { createChat, findChat, userChats } = require('./ChatController');


const express = require('express');
const router = express.Router();


router.post("/", createChat);
router.get("/:user_id", userChats);
router.get("/find/:first_id/:second_id", findChat);

module.exports = router;


express = require()