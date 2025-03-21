const express = require('express')
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFileAPI } = require('../controllers/apiController')
const { postCreateCustomerAPI } = require('../controllers/customerController')
const routerAPI = express.Router()

// user
routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', deleteUserAPI)
routerAPI.post('/file', postUploadSingleFileAPI)
routerAPI.post('/files', postUploadMultipleFileAPI)
// customer
routerAPI.post('/customers', postCreateCustomerAPI)
module.exports = routerAPI