const express = require("express");
const cors = require("cors");
const products = require("./data/products");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/categories", (req, res) => {
  const categories = [...new Set(products.map(product => product.category))];
  res.json(categories);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  console.log(`📦 Products: http://0.0.0.0:${PORT}/api/products`);
  console.log(`📂 Categories: http://0.0.0.0:${PORT}/api/categories`);
});