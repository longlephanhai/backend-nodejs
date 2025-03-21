const express = require('express')
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFileAPI } = require('../controllers/apiController')
const { postCreateCustomerAPI, postCreateArrayCustomerAPI, getCustomersAPI, patchUpdateCustomerAPI } = require('../controllers/customerController')
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
routerAPI.get('/customers', getCustomersAPI)
routerAPI.post('/customers-many', postCreateArrayCustomerAPI)
routerAPI.patch('/customers', patchUpdateCustomerAPI)
module.exports = routerAPI