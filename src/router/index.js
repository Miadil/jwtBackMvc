const express = require("express");

const movieRoutes = require("./movieRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

const authorization = require("../middleware/auth");

const router = express.Router();

router.use("/movie", authorization, movieRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
