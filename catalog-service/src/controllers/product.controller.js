const Product = require("../models/product.model");

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
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
