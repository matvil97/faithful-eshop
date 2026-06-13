const express = require("express");
const router = express.Router();
const { getProducts, getProduct, getVariants } = require("../services/printful");

router.get("/", async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await getProduct(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id/variants", async (req, res) => {
  try {
    const variants = await getVariants(req.params.id);
    res.json(variants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
