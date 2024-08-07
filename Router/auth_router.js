const express = require("express");
const router = express.Router();
const MessageForm= require("../Controllers/auth_controller")


router.route("/message").post(MessageForm);


module.exports = router;