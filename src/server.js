require('dotenv').config()
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const router = require('./routes/web')
const connection = require('./config/database')
const routerAPI = require('./routes/api')
const fileUpload = require('express-fileupload');

const port = process.env.PORT || 8080
const hostName = process.env.HOST_NAME

// config file upload
app.use(fileUpload());

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// config template engine
configViewEngine(app)

// khai báo route
app.use(router)
app.use("/v1/api", routerAPI)
// test connection
let conn;
conn = (async () => {
  try {
    await connection()
    app.listen(port, hostName, () => {
      console.log(`Backend zero app listening on port ${port}`)
    })
  } catch (error) {
    console.log(">> Backend zero connection to database", error);
  }
})()
