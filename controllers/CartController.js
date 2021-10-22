const ProductModel = require('../models/ProductModel')

const cartController = {
    cartUpdateItem(cart, newItem) {
        if(cart.length > 0) {
            const found = cart.find(item => item.id === newItem.id)
            if(found) {
                // item found in cart
                cart.forEach(item => {
                    if(item.id === newItem.id) {
                        item.qty += 1
                    }
                });
                return cart
            }
        }
        // item not found in cart.
        newItem.qty = 1
        cart.push(newItem)
        return cart
    },
    async cartAdd(req, res) {
        const results = await ProductModel.getProductById(req.params.id);
        const cart = req.session.cart ? req.session.cart : []
        if(results.length === 1) {
            const updatedCart = cartController.cartUpdateItem(cart, results[0])
            req.session.cart = updatedCart
        }
        console.log('session', req.session.cart)
        res.redirect('/')
    },
    showCart(req, res) {
        const cart = req.session.cart ? req.session.cart : []
        res.render('cart', { cart }) 
    }
}

module.exports = cartController
