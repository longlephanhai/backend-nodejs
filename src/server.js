require('dotenv').config()
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const router = require('./routes/web')
// Get the client
const mysql = require('mysql2');
const port = process.env.PORT || 8080
const hostName = process.env.HOST_NAME

// config template engine
configViewEngine(app)

// khai báo route
app.use(router)

// test connection
// Create the connection to database
const connection = mysql.createConnection({
  port: 3306, 
  host: 'localhost',
  user: 'root',
  password: 'log?1234',
  database: 'longlephanhai',
});

// A simple SELECT query
connection.query(
  'SELECT * FROM users',
  function (err, results, fields) {
    console.log("results: ", results); // results contains rows returned by server
    console.log("fields: ", fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`)
})