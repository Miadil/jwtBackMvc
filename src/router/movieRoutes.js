const express = require("express");

const { getAll } = require("../controller/movieController");

const router = express.Router();

router.get("/", getAll);

module.exports = router;
