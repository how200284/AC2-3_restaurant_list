// require Express and Express Router
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const search = require('./modules/search')
const restaurants = require('./modules/restaurants')
const sort = require('./modules/sort')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')

// set routes
router.use('/search', authenticator, search)
router.use('/restaurants', authenticator, restaurants)
router.use('/sort', authenticator, sort)
router.use('/users', users)
router.use('/', authenticator, home)

// export router
module.exports = router