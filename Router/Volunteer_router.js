const express = require("express");
const router = express.Router();
const VolunteerForm = require("../Controllers/volunteer_controller")

router.route("/volunteer").post(VolunteerForm)

module.exports = router;