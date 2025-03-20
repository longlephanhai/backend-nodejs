const express = require('express')
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI } = require('../controllers/apiController')
const routerAPI = express.Router()

routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
module.exports = routerAPI