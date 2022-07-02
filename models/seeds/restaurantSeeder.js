const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restaurantJSON = require('../../restaurant.json').results

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  Restaurant.create(restaurantJSON)
    .then(() => {
      console.log('restaurant seeders loaded!')
      // db.close()
    })
    .catch(error => console.log(error) )
})