const axios = require("axios");

const Product = require("../models/product.model");

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  await axios.post("http://event-bus:3005/events", {
    type: "ProductCreated",
    data: {
      id: product._id,
      name: product.name,
      price: product.price,
    },
  });

  res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find({ isActive: true });
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const products = await Product.findOne({
    _id: req.body.productId,
    isActive: true,
  });
  res.json(products);
};
