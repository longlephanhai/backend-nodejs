const express = require('express')
const { getUsersAPI } = require('../controllers/apiController')
const routerAPI = express.Router()

routerAPI.get('/', (req, res) => {
  res.send('Welcome to Backend zero API')
})
routerAPI.get('/abc', (req, res) => {
  res.status(200).json({ message: 'This is a test API' })
})
routerAPI.get('/users', getUsersAPI)
module.exports = routerAPI