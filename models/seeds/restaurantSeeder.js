const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Restaurant = require('../restaurant')
const User = require('../user')
const db = require('../../config/mongoose')
const restaurantJSON = require('../../restaurant.json').results
const userJSON = require('../../user.json').results

db.once('open', () => {
  for (let i = 0; i < userJSON.length; i++) {
    bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(userJSON[i].password, salt))
      .then(hash => User.create({
        name: userJSON[i].name,
        email: userJSON[i].email,
        password: hash
      }))
      .then(user => {
        const userId = user._id
        let addRestaurants = restaurantJSON.filter(restaurant => {
          return userJSON[i].restaurant_needed.includes(restaurant.id)
        }) // get data which restaurant id of restaurantJSON === restaurant array of userJSON.
        return Promise.all( // "return" is required, otherwise the flow will drop into the then() below, unless we use the Promise.all() method
          Array.from(addRestaurants, (value, index) => {
            value.userId = userId
            return Restaurant.create(value)
          })
        )
      })
      .then(() => {
        console.log('user & restaurant seeders loaded!')
        process.exit() // close the process.
      })
      .catch(error => console.log(error))
  }
})
