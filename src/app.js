require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const router = require("./router");

const app = express();
app.use(cors("*"));
// 2
app.use(express.json());
//3

app.use(cookieParser());
app.get("/", (req, res) => {
  res.status(200).send("on et la !");
});
app.use("/api", router);
// 1
app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found !" });
});

module.exports = app;
