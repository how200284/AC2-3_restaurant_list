// require external node_modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')
const usePassport = require('./config/passport')

// require internal modules
const routes = require('./routes')
require('./config/mongoose')
const Restaurant = require('./models/restaurant')

const app = express()
const PORT = process.env.PORT || 3000
app.engine('handlebars', exphbs( {defaultLayout: 'main'} ))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session({
  secret: 'RestaurantSecret',
  resave: false,
  saveUninitialized: true
}))
usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})
app.use(routes)

// listen on and start the Express server
app.listen(PORT, () => {
  console.log(`This express server is running on localhost:${PORT}`)
})