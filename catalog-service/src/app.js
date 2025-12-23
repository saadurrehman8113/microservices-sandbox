const express = require("express");

const productRoutes = require("./routes/product.route");

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

// health check (VERY important in microservices)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", service: "catalog-service" });
});

module.exports = app;
