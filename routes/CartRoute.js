const express = require('express') 
// import express
const cartController = require('../controllers/CartController')
const router = express.Router()

router.get('/', cartController.showCart)
router.get('/add/:id', cartController.cartAdd)

module.exports = router
// export router
