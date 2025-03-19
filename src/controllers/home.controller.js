const User = require("../models/user");
const { getUserById, updateUserById, deleteUserById } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  // const results = await getAllUser()
  const results = await User.find()
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
  await User.create({
    email,
    name,
    city
  })
  res.send('Create user successfully')
}

const getUpdatePage = async (req, res) => {
  const userId = req.params.id
  // const user = await getUserById(userId)
  const user = await User.findById(userId)
  res.render('edit.ejs', {
    user: user
  })
}

const postUpdateUser = async (req, res) => {
  const { id, email, name, city } = req.body;
  // await updateUserById(id, email, name, city)
  await User.updateOne({ _id: id }, {
    email,
    name,
    city
  })
  res.redirect('/')
}

const postDeleteUser = async (req, res) => {
  const userId = req.params.id
  // const user = await getUserById(userId)
  const user = await User.findById(userId)
  res.render('delete.ejs', {
    user: user
  })
}

const postHandleRemoveUser = async (req, res) => {
  const userId = req.body.id
  // await deleteUserById(userId)
  await User.deleteOne({ _id: userId })
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