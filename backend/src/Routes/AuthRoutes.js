// backend/routes/AuthRoutes.js
const express = require("express");
const router = express.Router();
const { googleAuth } = require("../Controller/AuthController");

router.get("/google", googleAuth); // Initiate Google Sign-in
//router.get("/logout", logout); // Logout route

module.exports = router;