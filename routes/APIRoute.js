const express = require('express')
const APIController = require('../controllers/APIController')
const router = express.Router()

router.get('/products/list', APIController.productList)


module.exports = router