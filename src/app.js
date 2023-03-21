require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const router = require("./router");

const app = express();
// 2
app.use(express.json());
//3
app.use(cookieParser());
app.use("/api", router);
// 1
app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found !" });
});

module.exports = app;
