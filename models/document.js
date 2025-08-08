const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  filename: { 
    type: String 
  },
  content: { // extracted text
    type: String,
    required: true
  },
  embedding: { // vector array
    type: [Number]
  },
  metadata: { // optional info (tags, type, etc.)
    type: Object
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Document', documentSchema);