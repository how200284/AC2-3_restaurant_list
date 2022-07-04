const Restaurant = require('../restaurant')
const db = require('../../config/mongoose')
const restaurantJSON = require('../../restaurant.json').results

db.once('open', () => {
  Restaurant.create(restaurantJSON)
    .then(() => {
      console.log('restaurant seeders loaded!')
      // db.close()
    })
    .catch(error => console.log(error) )
})