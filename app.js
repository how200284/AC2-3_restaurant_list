// require Express in this project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs( {defaultLayout: 'main'} ))
app.set('view engine', 'handlebars')

// set router
app.get('/', (req, res) => {
  res.render('index')
})

// listen on and start the Express server
app.listen(port, () => {
  console.log(`This express server is running on localhost:${port}`)
})