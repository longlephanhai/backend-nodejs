const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render('home.ejs')
}

const getABC = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
  console.log(req.body);
  
  res.send('Create a new user')
}
module.exports = {
  getHomePage,
  getABC,
  postCreateUser
}