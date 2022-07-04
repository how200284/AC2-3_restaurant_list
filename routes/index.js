// require Express and Express Router
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const search = require('./modules/search')
const restaurants = require('./modules/restaurants')
const sort = require('./modules/sort')

// set routes
router.use('/', home)
router.use('/search', search)
router.use('/restaurants', restaurants)
router.use('/sort', sort)

// export router
module.exports = router