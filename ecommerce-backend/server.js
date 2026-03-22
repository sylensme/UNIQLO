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

const PORT = 5001;

app.listen(PORT, '127.0.0.1', () => {
  console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
  console.log(`📦 Products: http://127.0.0.1:${PORT}/api/products`);
  console.log(`📂 Categories: http://127.0.0.1:${PORT}/api/categories`);
});