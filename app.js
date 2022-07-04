// require Express in this project
const express = require('express')
const app = express()
const port = 3000

// require routes
const routes = require('./routes')

// require body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))

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

// require method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(routes)


// listen on and start the Express server
app.listen(port, () => {
  console.log(`This express server is running on localhost:${port}`)
})