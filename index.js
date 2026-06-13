require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Faithful eshop backend running on http://localhost:${PORT}`);
});
