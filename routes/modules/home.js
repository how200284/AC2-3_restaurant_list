// require Express and Express Router
const express = require('express')
const router = express.Router()

// require Restaurant
const Restaurant = require('../../models/restaurant')

// set routes
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.error(err))
})

// export router
module.exports = router