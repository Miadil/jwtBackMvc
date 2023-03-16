require("dotenv").config();
const express = require("express");

const router = require("./router");

const app = express();
// 2
app.use(express.json());
app.use("/api", router);
// 1
app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found !" });
});

module.exports = app;
