require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// DB connect
connectDB(process.env.MONGO_URI);

// Middleware
app.use(express.json());
app.use(
  cors()
);

// Routes
app.use("/api/auth", require("./routes/auth"));

// Default
app.get("/", (req, res) => {
  res.send("Elevatr backend running");
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

