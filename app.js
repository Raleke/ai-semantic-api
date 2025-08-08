const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();


app.use(express.json()); 
app.use(cors());      
app.use(morgan('dev'));  


app.get('/health', (req, res) => {
  res.json({ status: 'API is running ✅' });
});

module.exports = app;