const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  tiktokLink: { type: String },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
  dateAdded: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;