const express = require('express')
const { getABC, getHomePage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser } = require('../controllers/home.controller')
const router = express.Router()

router.get('/', getHomePage)
router.get('/abc', getABC)
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)
router.get('/update/:id', getUpdatePage)
router.post('/update-user', postUpdateUser)
module.exports = router