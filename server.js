require('dotenv').config(); // Load .env first
const express = require('express');
const connectDB = require('./config/db');

const app = express();


app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'API is running' });
});


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});