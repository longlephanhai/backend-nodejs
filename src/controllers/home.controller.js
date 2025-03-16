const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render('home.ejs')
}

const getABC = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
  const { email, name, city } = req.body
  const query = `INSERT INTO users (email, name, city) VALUES (?,?,?)`
  connection.query(
    query,
    [email, name, city],
    (err, results) => {
      res.send('Create user successfully')
    }
  )
}
module.exports = {
  getHomePage,
  getABC,
  postCreateUser
}