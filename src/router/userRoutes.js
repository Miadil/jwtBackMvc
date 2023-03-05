const express = require("express");

const { getOne } = require("../controller/userController");

const router = express.Router();

// router.get("/", getAll);
router.get("/:id", getOne);

module.exports = router;
