const User = require("../models/user")
const { uploadSingleFile, uploadMultipleFile } = require("../services/fileService")

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

const deleteUserAPI = async (req, res) => {
  const id = req.body.userId
  const result = await User.deleteOne({ _id: id })
  return res.status(200).json({
    errorCode: 0,
    data: result,
  })
}

const postUploadSingleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const result = await uploadSingleFile(req.files.image)
  return res.send("ok")
}

const postUploadMultipleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  await uploadMultipleFile(req.files.image)
  return res.send("ok")
}
module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFileAPI
}