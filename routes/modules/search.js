// require Express and Express Router
const express = require('express')
const router = express.Router()

// require Restaurant
const Restaurant = require('../../models/restaurant')

// set routes
router.get('/', (req, res) => {
  const keyword = req.query.keyword?.trim()
  const regexp = new RegExp(keyword, 'i')
  const userId = req.user._id  // get userId of this user.

  Restaurant.find({
    $or: [{ name: regexp }, { category: regexp }], userId: userId  // add "userId" to filter restaurant data which belongs to this user.
  })
    .lean()
    .then(restaurants => res.render('index', { restaurants, keyword }))
    .catch(err => console.log(err))
})

// export router
module.exports = router