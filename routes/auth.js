const express = require("express");
const { loginUser, logoutUser } = require("../controller/authController");

const router = express.Router();

router.post("/login", loginUser);

router.get("/logout", logoutUser);

module.exports = router;
