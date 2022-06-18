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
const restaurantList = require('./restaurant.json')

// set router
  // homepage
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

// listen on and start the Express server
app.listen(port, () => {
  console.log(`This express server is running on localhost:${port}`)
})