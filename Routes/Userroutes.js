const express = require("express");
const signcontroller = require("../controller/usercontroller");


const router = express.Router();

// router || post
router.post("/sign", signcontroller)

module.exports = router;