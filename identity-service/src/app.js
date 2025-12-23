const express = require("express");

const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

// health check (VERY important in microservices)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", service: "identity-service" });
});

module.exports = app;
