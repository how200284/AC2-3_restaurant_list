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

// // require restaurant.json
// const restaurantList = require('./restaurant.json').results
const Restaurant = require('./models/restaurant')

// require mongoose & connect to MONGODB
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

// set route
  // homepage
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then( restaurants => res.render('index', { restaurants }))
    .catch(err => console.log(err))
})

  // search bar
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const searchResults = restaurantList.filter( restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.trim().toLowerCase()) ||
    restaurant.category.includes(keyword.trim())
  })
  res.render('index', { restaurants: searchResults, keyword })
})

  // show page
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.find( restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant })
})

// listen on and start the Express server
app.listen(port, () => {
  console.log(`This express server is running on localhost:${port}`)
})