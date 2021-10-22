const productModel = require('../models/ProductModel')

const productController = {
    async productList(req, res) {
        req.session.cart = req.session.cart ? req.session.cart : []
        const products = await productModel.getAllProducts()
        res.render('products', { products, cart: req.session.cart })
    }
}

module.exports = productController