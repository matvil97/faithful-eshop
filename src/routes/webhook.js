const Stripe = require("stripe");
const { createOrder } = require("../services/printful");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

async function handleStripeWebhook(req, res) {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("[Webhook] Signature invalide:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const rawSession = event.data.object;

    if (rawSession.payment_status !== "paid") return res.json({ received: true });

    try {
      // Récupère la session complète pour avoir tous les champs
      const session = await stripe.checkout.sessions.retrieve(rawSession.id);

      // Stripe API récente : shipping sous collected_information ou shipping_details
      const shipping =
        session.collected_information?.shipping_details ||
        session.shipping_details;

      console.log("[Webhook] shipping_details:", JSON.stringify(shipping));

      const items = JSON.parse(session.metadata.items);

      if (!shipping?.name || !shipping?.address) {
        console.error("[Webhook] Adresse de livraison manquante — session:", session.id);
        return res.json({ received: true });
      }

      await createOrder({
        recipient: {
          name: shipping.name,
          email: session.customer_details?.email || "",
          address1: shipping.address.line1,
          address2: shipping.address.line2 || "",
          city: shipping.address.city,
          country_code: shipping.address.country,
          zip: shipping.address.postal_code,
        },
        items: items.map((i) => ({
          sync_variant_id: i.variantId,
          quantity: i.quantity,
        })),
      });

      console.log(`[Webhook] Commande Printful créée — session ${session.id}`);
    } catch (err) {
      console.error("[Webhook] Erreur création commande Printful:", err.message);
      // On retourne 200 quand même pour éviter que Stripe retente le webhook
    }
  }

  res.json({ received: true });
}

module.exports = { handleStripeWebhook };
