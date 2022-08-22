// require Express and Express Router
const express = require('express')
const router = express.Router()

// require Restaurant
const Restaurant = require('../../models/restaurant')

// set routes
router.get('/nameAsc', (req, res) => {
  const userId = req.user._id
  Restaurant.find({userId})
    .lean()
    .sort({ name: 'asc'})
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.error(err))
})

router.get('/nameDesc', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .sort({ name: 'desc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.error(err))
})

router.get('/ratingDesc', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .sort({ rating: 'desc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.error(err))
})

router.get('/ratingAsc', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .sort({ rating: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.error(err))
})

// export router
module.exports = router