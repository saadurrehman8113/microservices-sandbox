const User = require("../models/user.model");

exports.getUserById = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId).select("_id email name");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};
