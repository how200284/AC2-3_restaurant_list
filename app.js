// require Express in this project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs( {defaultLayout: 'main'} ))
app.set('view engine', 'handlebars')

// set static files
app.use(express.static('public'))

// require restaurant.json
const restaurantList = require('./restaurant.json').results

// set router
  // homepage
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList })
})

  // search bar
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const searchResults = restaurantList.filter( restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
    restaurant.category.includes(keyword)
  })
  res.render('index', { restaurants: searchResults})
})

  // show page
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.find( restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})

// listen on and start the Express server
app.listen(port, () => {
  console.log(`This express server is running on localhost:${port}`)
})