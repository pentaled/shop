const productModel = require('../models/ProductModel')

const productController = {
    async productList(req, res) {
        const products = await productModel.getAllProducts()
        res.render('products', { products })
    }
}

module.exports = productController