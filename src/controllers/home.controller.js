const connection = require("../config/database");
const { getAllUser, getUserById, updateUserById, deleteUserById } = require("../services/CRUDService");

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

const getUpdatePage = async (req, res) => {
  const userId = req.params.id
  const user = await getUserById(userId)
  res.render('edit.ejs', {
    user: user
  })
}

const postUpdateUser = async (req, res) => {
  const { id, email, name, city } = req.body;
  await updateUserById(id, email, name, city)
  res.redirect('/')
}

const postDeleteUser = async (req, res) => {
  const userId = req.params.id
  const user = await getUserById(userId)
  res.render('delete.ejs', {
    user: user
  })
}

const postHandleRemoveUser = async (req, res) => {
  const userId = req.body.id
  await deleteUserById(userId)
  res.redirect('/')
}
module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser
}