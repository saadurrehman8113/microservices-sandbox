const axios = require("axios");
const User = require("../models/user.model");

exports.register = async (req, res) => {
  const { email, password, name } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(409).json({ message: "User already exists!" });
  }

  const user = await User.create({ email, password, name });

  await axios.post("http://event-bus:3005/events", {
    type: "UserCreated",
    data: {
      id: user._id,
      email: user.email,
      name: user.name,
    },
  });

  res.status(201).json({
    id: user._id,
    email: user.email,
    name: user.name,
  });
};
