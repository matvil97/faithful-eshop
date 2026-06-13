require("dotenv").config();
const { getProducts } = require("../services/printful");

(async () => {
  console.log("Connexion Printful en cours...\n");
  try {
    const products = await getProducts();
    if (products.length === 0) {
      console.log("Connexion OK — aucun produit dans la boutique pour l'instant.");
    } else {
      console.log(`Connexion OK — ${products.length} produit(s) trouvé(s) :\n`);
      products.forEach((p) => console.log(`  • [${p.id}] ${p.name}`));
    }
  } catch (err) {
    console.error("Erreur de connexion Printful :", err.message);
    process.exit(1);
  }
})();
