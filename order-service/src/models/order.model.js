const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: String,
    items: [
      {
        productId: String,
        productName: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalAmount: Number,
    status: {
      type: String,
      default: "CREATED",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
