const axios = require("axios");

const printful = axios.create({
  baseURL: "https://api.printful.com",
  headers: {
    Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    "Content-Type": "application/json",
  },
});

async function getProducts() {
  const res = await printful.get("/store/products");
  return res.data.result;
}

async function getProduct(id) {
  const res = await printful.get(`/store/products/${id}`);
  return res.data.result;
}

async function getVariants(productId) {
  const res = await printful.get(`/store/products/${productId}`);
  return res.data.result.sync_variants;
}

async function createOrder(order) {
  const res = await printful.post("/orders", order);
  return res.data.result;
}

async function getShippingRates(recipient, items) {
  const res = await printful.post("/shipping/rates", { recipient, items });
  return res.data.result;
}

module.exports = { getProducts, getProduct, getVariants, createOrder, getShippingRates };
