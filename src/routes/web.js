const express = require('express')
const { getABC, getHomePage, postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/home.controller')
const router = express.Router()

router.get('/', getHomePage)
router.get('/abc', getABC)
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)
router.get('/update/:id', getUpdatePage)
module.exports = router