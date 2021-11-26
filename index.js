const express = require('express')
const session = require('express-session')
require('dotenv').config()
const ProductRoute = require('./routes/ProductRoute')
const CartRoute = require('./routes/CartRoute')
const APIRoute = require('./routes/APIRoute')

const app = express()
app.listen(3000)
app.use(session({secret: 'monkey', resave: true, saveUninitialized: true}))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))
app.use('/', ProductRoute)
app.use('/cart', CartRoute)
app.use('/api', APIRoute)