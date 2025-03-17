const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render('home.ejs')
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