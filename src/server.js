require('dotenv').config()
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const router = require('./routes/web')
const connection = require('./config/database')
// Get the client

const port = process.env.PORT || 8080
const hostName = process.env.HOST_NAME

// config template engine
configViewEngine(app)

// khai báo route
app.use(router)

// test connection


// A simple SELECT query


app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`)
})