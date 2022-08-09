// require Express and Express Router
const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../../models/user')

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
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
        res.render('register', {
          errors,
          name,
          email
        })
      } else {
        return User.create({
          name,
          email,
          password
        })
          .then(() => res.redirect('/'))
          .catch(err => console.log(err))
      }
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