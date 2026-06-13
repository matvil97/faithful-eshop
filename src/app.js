const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const checkoutRoutes = require("./routes/checkout");
const { handleStripeWebhook } = require("./routes/webhook");

const app = express();

app.use(cors());

// Webhook Stripe — raw body AVANT express.json()
app.post(
  "/api/webhook/stripe",
  express.raw({ type: "application/json" }),
  handleStripeWebhook
);

app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", checkoutRoutes);

module.exports = app;
