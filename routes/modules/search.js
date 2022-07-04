// require Express and Express Router
const express = require('express')
const router = express.Router()

// require Restaurant
const Restaurant = require('../../models/restaurant')

// set routes
router.get('/', (req, res) => {
  const keyword = req.query.keyword?.trim()
  const regexp = new RegExp(keyword, 'i')
  const { name, category } = req.query
  Restaurant.find({
    $or: [{ name: regexp }, { category: regexp }]
  })
    .lean()
    .then(restaurants => res.render('index', { restaurants, keyword }))
    .catch(err => console.log(err))
})

// export router
module.exports = router