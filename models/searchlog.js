const mongoose = require('mongoose');

const searchLogSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  query: { 
    type: String, 
    required: true 
  },
  resultsCount: { 
    type: Number 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('SearchLog', searchLogSchema);