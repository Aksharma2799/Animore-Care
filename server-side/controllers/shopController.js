const Shop = require('../models/sellerModel');
const Product = require('../models/productModel');

// Get Nearby Shops
exports.getNearbyShops = async (req, res) => {
  const { location } = req.query; // Expecting a query parameter for location
  const shops = await Shop.find({ location }); // A more complex geolocation logic would go here
  res.json(shops);
};

// Add Product (for sellers)
exports.addProduct = async (req, res) => {
  const { sellerId, productDetails } = req.body;
  const product = new Product(productDetails);
  await product.save();

  const seller = await Seller.findById(sellerId);
  seller.products.push(product._id);
  await seller.save();
  res.status(201).json({ message: 'Product added successfully' });
};
