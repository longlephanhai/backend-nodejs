const { createCustomerService, createArrayCustomerService } = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");

const postCreateCustomerAPI = async (req, res) => {
  const { name, address, phone, email, description } = req.body
  let imgUrl = ''
  if (!req.files || Object.keys(req.files).length === 0) {
    // do nothing
  } else {
    const result = await uploadSingleFile(req.files.image)
    imgUrl = result.path
  }
  const result = await createCustomerService(name, address, phone, email, description, imgUrl)
  res.status(200).json({
    status: 200,
    data: result
  })
}

const postCreateArrayCustomerAPI = async (req, res) => {
  const result = await createArrayCustomerService(req.body.customers)
  res.status(200).json({
    status: 200,
    data: result
  })
}
module.exports = {
  postCreateCustomerAPI,
  postCreateArrayCustomerAPI
}