const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /products - get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ dateAdded: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST /products - add a new product
router.post('/', async (req, res) => {
  try {
    const { name, price, imageUrl, tiktokLink, likes, comments, sold } = req.body;

    const newProduct = new Product({
      name,
      price,
      imageUrl,
      tiktokLink,
      likes,
      comments,
      sold
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: 'Bad request', error: err.message });
  }
});

module.exports = router;
