const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 8080
const hostName = process.env.HOST_NAME
// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.send('Hello World with me!')
})

app.get('/abc', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`)
})