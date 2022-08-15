// require Express and Express Router
const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')

const User = require('../../models/user')

router.get('/login', (req, res) => {
  // When users fail to login, they will be redirected to '/login', which will 'GET' this page.
  // Thus we push req.flash('error') here, and send this message to handlebars.
  const errorMessage = req.flash('error')
  const errors = []

  if (errorMessage.length) {
    errors.push({ message: errorMessage })
  }

  res.render('login', { errors })
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true  // activate connect-flash message on passport.js
}))

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const errors = []
  if (password !== confirmPassword) {
    errors.push({ message: 'Password and confirmPassword do not match, please enter again.' })
  }
  if (errors.length) {
    return res.render('register', {
      errors,
      name,
      email
    })
  }
  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.push({ message: 'This email has been registered.' })
        return res.render('register', {
          errors,
          name,
          email
        })
      }
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => User.create({
          name,
          email,
          password: hash
        }))
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'You\'ve logged out successfully.')
  res.redirect('/users/login')
})

// export router
module.exports = router