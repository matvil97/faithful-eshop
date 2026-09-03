require("dotenv").config();
const axios = require("axios");

const printful = axios.create({
  baseURL: "https://api.printful.com",
  headers: {
    Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    "Content-Type": "application/json",
  },
});

// Prix calculés pour garantir une marge minimale de 7€ par produit,
// sur la base du coût Printful total réel (produit + livraison + TVA
// facturée par Printful), obtenu via des commandes de test annulées.
// Recalculer si Printful modifie ses coûts ou si de nouveaux produits arrivent.
const UPDATES = [
  { productId: 439033673, name: "Tshirt oversize Faithful (unisexe)", price: "35.99" },
  { productId: 445115732, name: "Tshirt Faithful women edition", price: "36.99" },
  { productId: 439140231, name: "Casquette Faithful", price: "29.99" },
  { productId: 441875248, name: "Bob Faithful", price: "33.99" },
  { productId: 439122177, name: "Short Faithful", price: "42.99" },
  { productId: 439032232, name: "Mug Faithful", price: "35.99" },
  { productId: 464383614, name: "Hoodie Faithful women edition", price: "45.99" },
  { productId: 464484809, name: "Bonnet Faithful The Lifter", price: "34.99" },
  { productId: 464815111, name: "Sweat Faithful women edition", price: "65.99" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function updateProductPrice({ productId, name, price }) {
  const res = await printful.get(`/store/products/${productId}`);
  const variants = res.data.result.sync_variants;

  const payload = {
    sync_variants: variants.map((v) => ({
      id: v.id,
      retail_price: price,
    })),
  };

  await printful.put(`/store/products/${productId}`, payload);
  console.log(`✓ ${name} — ${variants.length} variantes → €${price}`);
}

(async () => {
  for (const update of UPDATES) {
    try {
      await updateProductPrice(update);
    } catch (err) {
      const status = err.response?.status;
      const msg = err.response?.data?.error?.message || err.message;
      console.error(`✗ ${update.name} — ${status ?? ""} ${msg}`);
    }
    await sleep(2500); // évite le rate limit Printful (429)
  }
  console.log("\n✅ Prix mis à jour dans Printful.");
})();
