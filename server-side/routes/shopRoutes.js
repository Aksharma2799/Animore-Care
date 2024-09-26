const express = require('express');
const router = express.Router();
const { getNearbyShops, addProduct } = require('../controllers/shopController');

router.get('/nearby', getNearbyShops);
router.post('/add-product', addProduct);

module.exports = router;
