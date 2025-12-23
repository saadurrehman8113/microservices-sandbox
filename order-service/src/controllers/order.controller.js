const Order = require("../models/order.model");
const { validateUser } = require("../services/identity.service");
const { getProduct } = require("../services/catalog.service");

exports.createOrder = async (req, res) => {
  const { userId, items } = req.body;

  // 1️⃣ Validate user
  await validateUser(userId);

  let total = 0;
  const enrichedItems = [];

  // 2️⃣ Fetch product details
  for (const item of items) {
    const product = await getProduct(item.productId);

    total += product.price * item.quantity;

    enrichedItems.push({
      productId: product._id,
      productName: product.name,
      price: product.price,
      quantity: item.quantity,
    });
  }

  // 3️⃣ Create order
  const order = await Order.create({
    userId,
    items: enrichedItems,
    totalAmount: total,
  });

  res.status(201).json(order);
};
