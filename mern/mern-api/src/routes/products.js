const express = require('express');

const router = express.Router();

const productController = require('../controllers/products');

router.post('/product', productController.createProduct);

router.get('/products', productController.getAllProduct);

// router.put('/product', (req, res, next) => {
//     res.json({name: "muji rahman", email: "mujirahman@gmail.com"});
//     next();
// })

// router.delete('/product', (req, res, next) => {
//     res.json({name: "muji rahman", email: "mujirahman@gmail.com"});
//     next();
// })

module.exports = router;