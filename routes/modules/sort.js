// require Express and Express Router
const express = require('express')
const router = express.Router()

// require Restaurant
const Restaurant = require('../../models/restaurant')

// set routes
router.get('/nameAsc', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'asc'})
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.error(err))
})

router.get('/nameDesc', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'desc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.error(err))
})

router.get('/ratingDesc', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ rating: 'desc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.error(err))
})

router.get('/ratingAsc', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ rating: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.error(err))
})

// export router
module.exports = router