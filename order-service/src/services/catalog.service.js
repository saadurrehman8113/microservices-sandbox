const axios = require("axios");

exports.getProduct = async (productId) => {
  const response = await axios.get(
    `${process.env.CATALOG_SERVICE_URL}/products/${productId}`
  );

  return response.data;
};
