const mongoose = require('mongoose');

const FlamesSchema = new mongoose.Schema({
  name1: { type: String, required: true },
  name2: { type: String, required: true },
  relation: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Flames', FlamesSchema);
