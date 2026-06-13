const express = require("express");
const router = express.Router();
const { createOrder, getShippingRates } = require("../services/printful");

// POST /api/orders/shipping-rates
router.post("/shipping-rates", async (req, res) => {
  try {
    const { recipient, items } = req.body;
    const rates = await getShippingRates(recipient, items);
    res.json(rates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/orders
router.post("/", async (req, res) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
