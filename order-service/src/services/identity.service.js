const axios = require("axios");

exports.validateUser = async (userId) => {
  const response = await axios.get(
    `${process.env.IDENTITY_SERVICE_URL}/users/${userId}`
  );

  return response.data;
};
