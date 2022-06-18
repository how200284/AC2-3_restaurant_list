// require Express in this project
const express = require('express')
const app = express()
const port = 3000

// set route
app.get('/', (req, res) => {
  res.send('This is homepage')
})

// listen on and start the Express server
app.listen(port, () => {
  console.log(`This express server is running on localhost:${port}`)
})