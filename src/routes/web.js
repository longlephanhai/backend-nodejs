const express = require('express')
const { handleGetHomePage, getABC } = require('../controllers/home.controller')
const router = express.Router()

router.get('/', handleGetHomePage)

router.get('/abc', getABC)

module.exports = router