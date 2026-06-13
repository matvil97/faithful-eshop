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
  { productId: 439033692, name: "Tshirt Faithful (homme)", price: "28.99" },
  { productId: 439033673, name: "Tshirt Faithful for women", price: "26.99" },
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
