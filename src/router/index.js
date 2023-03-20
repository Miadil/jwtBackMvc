const express = require("express");

const movieRoutes = require("./movieRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

const router = express.Router();

router.use("/movie", movieRoutes);
router.use("/user", userRoutes);
router.use(authRoutes);

module.exports = router;
