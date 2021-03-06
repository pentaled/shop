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
        let cartTotal = 0;
        const cart = req.session.cart ? req.session.cart : []
        if(cart.length > 0) {
            cart.forEach(item => {
                cartTotal += eval(item.qty) * eval(item.price)
            })
        }
        res.render('cart', { cart, cartTotal }) 
    },
    cartUpdateQty(req, res){
        if(req.body.quantity && req.body.id) {
            // session -> cart -> array of items -> item has an ID -> update qty
            const cart = req.session.cart ? req.session.cart : []
            const updatedCart = cart.map(item => {
                if(item.id == req.body.id) {
                    item.qty = req.body.quantity
                }
                return item
            })
            console.log('cart',cart )
            console.log('updated',updatedCart )
            req.session.cart = updatedCart
        }
        res.redirect('/cart')
    },
    cartDestroyItem(req, res){
        const cart = req.session.cart ? req.session.cart : []
        const updatedCart = cart.filter(item => item.id != req.params.id)
        req.session.cart = updatedCart
        res.redirect('/cart')
    }
    
}

module.exports = cartController