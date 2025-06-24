// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// 🔐 In-memory mock user database
let users = [];
let products = [];

// ✅ REGISTER
app.post('/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (users.find(user => user.email === email)) {
    return res.status(409).json({ error: "User already exists" });
  }
  users.push({ email, password });
  res.json({ message: "Registered successfully" });
});

// ✅ LOGIN
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const foundUser = users.find(user => user.email === email && user.password === password);
  if (!foundUser) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  res.json({ message: "Login successful", token: "mock-token" });
});

// ✅ CHANGE PASSWORD
app.put('/auth/change-password', (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  const user = users.find(user => user.email === email && user.password === oldPassword);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  user.password = newPassword;
  res.json({ message: "Password updated successfully" });
});

// ✅ PRODUCTS: GET all
app.get('/products', (req, res) => {
  res.json(products);
});

// ✅ PRODUCTS: GET one
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// ✅ PRODUCTS: CREATE
app.post('/products', (req, res) => {
  const newProduct = { ...req.body, id: Date.now() };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// ✅ PRODUCTS: UPDATE (PUT)
app.put('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Product not found" });

  products[index] = { ...req.body, id: products[index].id };
  res.json(products[index]);
});

// ✅ PRODUCTS: PATCH
app.patch('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });

  Object.assign(product, req.body);
  res.json(product);
});

// ✅ PRODUCTS: DELETE
app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Product not found" });

  const deleted = products.splice(index, 1);
  res.json({ message: "Deleted", product: deleted[0] });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
