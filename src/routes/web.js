const express = require('express')
const {  getABC, getHomePage } = require('../controllers/home.controller')
const router = express.Router()

router.get('/', getHomePage)

router.get('/abc', getABC)

module.exports = router