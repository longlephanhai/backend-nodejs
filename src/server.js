require('dotenv').config()
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const router = require('./routes/web')
const connection = require('./config/database')
const { default: mongoose } = require('mongoose')
// Get the client

const port = process.env.PORT || 8080
const hostName = process.env.HOST_NAME

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// config template engine
configViewEngine(app)

// khai báo route
app.use(router)

const kittySchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'Silence' });
cat.save();

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
