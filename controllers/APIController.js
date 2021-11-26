const productModel = require('../models/ProductModel')

const APIController = {
    async productList(req, res) {
        const products = await productModel.getAllProducts()
        res.send({ products })
    }
}

module.exports = APIController