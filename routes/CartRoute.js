const express = require('express')
const CartController = require('../controllers/CartController')
const router = express.Router()

router.get('/add/:id', CartController.cartAdd)
router.get('/', CartController.showCart)
router.post('/update/qty', CartController.cartUpdateQty)

module.exports = router