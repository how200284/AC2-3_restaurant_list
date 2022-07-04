// require Express and Express Router
const express = require('express')
const router = express.Router()

// require Restaurant
const Restaurant = require('../../models/restaurant')

// set routes
  // new page
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  return Restaurant.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

  // show page
router.get('/:restaurantId', (req, res) => {
  return Restaurant.findById(req.params.restaurantId)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(err => console.log(err))
})

  // edit page
router.get('/:restaurantId/edit', (req, res) => {
  return Restaurant.findById(req.params.restaurantId)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(err => console.log(err))
})

router.put('/:restaurantId', (req, res) => {
  const restaurantId = req.params.restaurantId
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  return Restaurant.findById(restaurantId)
    .then(restaurant => {
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.category = category
      restaurant.image = image
      restaurant.location = location
      restaurant.phone = phone
      restaurant.google_map = google_map
      restaurant.rating = rating
      restaurant.description = description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${restaurantId}`))
    .catch(err => console.log(err))
})

  // delete data
router.delete('/:restaurantId', (req, res) => {
  return Restaurant.findById(req.params.restaurantId)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// export router
module.exports = router