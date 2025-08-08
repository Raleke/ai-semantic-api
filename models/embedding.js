const mongoose = require('mongoose');

const embeddingSchema = new mongoose.Schema({
  document: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Document', 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'processing', 'completed', 'failed'], 
    default: 'pending' 
  },
  vector: { // store the embedding here if not in Document
    type: [Number]
  },
  error: { 
    type: String 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  completedAt: { 
    type: Date 
  }
});

module.exports = mongoose.model('Embedding', embeddingSchema);