const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, enum: ['shop', 'clinic'], required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  location: { type: String, required: true } // used for geolocation on the map
});

module.exports = mongoose.model('Seller', sellerSchema);
