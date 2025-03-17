const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  const results = await getAllUser()
  return res.render('home.ejs', {
    listUser: results
  })
}

const getABC = (req, res) => {
  res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
  res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body
  // connection.query(
  //   query,
  //   [email, name, city],
  //   (err, results) => {
  //     res.send('Create user successfully')
  //   }
  // )
  const [results, fields] = await connection.query(
    'INSERT INTO users (email, name, city) VALUES (?,?,?)', [email, name, city]
  );
  console.log("results", results);
  res.send('Create user successfully')
}
module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage
}