const express = require("express");

const orderRoutes = require("./routes/order.route");

const app = express();

app.use(express.json());

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "UserCreated") {
    // save user locally
  }

  if (type === "ProductCreated") {
    // save product locally
  }

  res.send({});
});

app.use("/orders", orderRoutes);

// health check (VERY important in microservices)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", service: "order-service" });
});

module.exports = app;
