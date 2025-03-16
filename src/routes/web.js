const express = require('express')
const { getABC, getHomePage, postCreateUser } = require('../controllers/home.controller')
const router = express.Router()

router.get('/', getHomePage)
router.get('/abc', getABC)
router.post('/create-user', postCreateUser)
module.exports = router