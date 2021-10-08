const express = require('express') 
// import express
const productController = require('../controllers/ProductController')
const router = express.Router()

router.get('/', productController.productList)

module.exports = router
// export router
