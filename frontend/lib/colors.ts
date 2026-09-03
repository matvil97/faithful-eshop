// Source unique des couleurs connues, partagée par ProductCard et ProductDetail.
// Ne pas dupliquer cette liste ailleurs : un nom de couleur absent d'ici est
// mal reconnu (retombe sur le nom du produit ou sur une taille), ce qui casse
// le rattachement des photos (voir localImages.ts) et l'affichage de la pastille.
export const COLOR_HEX: Record<string, string> = {
  "Black": "#1c1c1c",
  "Black Heather": "#2e2e2e",
  "White": "#f0f0f0",
  "Ash": "#b8b5ae",
  "Stone": "#c9c4b8",
  "Light Blue": "#a4c4d8",
  "Heather Ice Blue": "#b2d4da",
  "Carolina Blue": "#88b4d2",
  "Navy": "#1e3a5f",
  "Grey": "#8a8a8a",
  "Khaki": "#bba96a",
  "Red": "#c0392b",
  "Yellow": "#d4ac0d",
  "Faded Bone": "#e6ddcd",
  "Faded Khaki": "#c3a878",
  "Light Washed Denim": "#c7d4d9",
  "Vintage White": "#f2ead9",
  "Washed Black": "#2a2a28",
  "Washed Charcoal": "#4b4a44",
  "Washed Maroon": "#6b3540",
  "Pink": "#e8a0b4",
  "Charcoal": "#54534d",
  "Dark Chocolate": "#3b2314",
  "Military Green": "#4b5320",
  "Dark Grey": "#6b6b6b",
  "Storm": "#5c6670",
};

export const KNOWN_COLORS = new Set(Object.keys(COLOR_HEX));
