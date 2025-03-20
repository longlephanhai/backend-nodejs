const User = require("../models/user")

const getUsersAPI = async (req, res) => {
  const results = await User.find()
  return res.status(200).json({
    errorCode: 0,
    data: results,
  })
}

const postCreateUserAPI = async (req, res) => {
  const { email, name, city } = req.body
  const user = await User.create({
    email,
    name,
    city
  })
  return res.status(200).json({
    errorCode: 0,
    data: user,
  })
}

const putUpdateUserAPI = async (req, res) => {
  const { id, email, name, city } = req.body;
  const user = await User.updateOne({ _id: id }, {
    email,
    name,
    city
  })
  return res.status(200).json({
    errorCode: 0,
    data: user,
  })
}
module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI
}