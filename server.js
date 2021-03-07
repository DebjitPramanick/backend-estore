const express = require("express");
const userRoutes = require("./userRoutes");

const connectDB = require("./db");

connectDB();

const app = express();
// GET Request to "/" route
app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use("/api/user", userRoutes);

PORT = 5000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}..`));
