const express = require("express");

const movieRoutes = require("./movieRoutes");

const router = express.Router();

router.use("/movie", movieRoutes);

module.exports = router;
