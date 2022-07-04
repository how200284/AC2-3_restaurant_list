// require external node_modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// require internal modules
const routes = require('./routes')
require('./config/mongoose')
const Restaurant = require('./models/restaurant')

const app = express()
const port = 3000
app.engine('handlebars', exphbs( {defaultLayout: 'main'} ))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// listen on and start the Express server
app.listen(port, () => {
  console.log(`This express server is running on localhost:${port}`)
})