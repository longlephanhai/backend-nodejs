const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World with me!')
})

router.get('/abc', (req, res) => {
  res.render('sample.ejs')
})

module.exports = router