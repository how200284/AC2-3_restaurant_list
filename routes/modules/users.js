// require Express and Express Router
const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  
})

// export router
module.exports = router