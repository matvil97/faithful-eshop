require("dotenv").config();
const axios = require("axios");

const printful = axios.create({
  baseURL: "https://api.printful.com",
  headers: {
    Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    "Content-Type": "application/json",
  },
});

const UPDATES = [
  { productId: 439033692, name: "Tshirt Faithful", price: "28.99" },
  { productId: 439033673, name: "Tshirt oversize femme", price: "29.99" },
  { productId: 439033624, name: "Hoodie Faith", price: "44.99" },
  { productId: 439140231, name: "Casquette Faithful", price: "29.99" },
  { productId: 441875248, name: "Bob Faithful", price: "33.99" },
  { productId: 439122177, name: "Short Faithful", price: "39.99" },
  { productId: 441880457, name: "Tote bag Faithful", price: "28.99" },
  { productId: 441892429, name: "Coque iPhone Faithful", price: "27.99" },
];

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
    await updateProductPrice(update);
  }
  console.log("\n✅ Prix mis à jour dans Printful.");
})();
