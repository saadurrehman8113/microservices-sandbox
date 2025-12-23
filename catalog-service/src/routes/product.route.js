const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:productId", getProductById);

module.exports = router;
