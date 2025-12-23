const express = require("express");

const orderRoutes = require("./routes/order.route");

const app = express();

app.use(express.json());

app.use("/orders", orderRoutes);

// health check (VERY important in microservices)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", service: "order-service" });
});

module.exports = app;
