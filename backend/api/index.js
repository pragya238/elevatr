require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

connectDB(process.env.MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("Elevatr Backend (serverless)");
});

module.exports = app;
