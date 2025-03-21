const Customer = require("../models/customer")

const createCustomerService = async (name, address, phone, email, description, imgUrl) => {
  try {
    const newCustomer = await Customer.create({
      name,
      address,
      phone,
      email,
      description,
      image: imgUrl
    })
    return newCustomer
  } catch (error) {
    return error
  }
}
const createArrayCustomerService = async (customers) => {
  try {
    const result = await Customer.insertMany(customers)
    return result
  } catch (error) {
    return error
  }
}
const getCustomersService = async () => {
  try {
    const result = await Customer.find()
    return result
  } catch (error) {
    return error
  }
}
const updateCustomerService = async (id, name, email, address) => {
  try {
    const result = await Customer.updateOne({ _id: id }, {
      name,
      email,
      address
    })
    return result
  } catch (error) {
    return error
  }
}
const deleteCustomerService = async (id) => {
  try {
    const result = await Customer.deleteById(id)
    return result
  } catch (error) {
    return error
  }
}
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getCustomersService,
  updateCustomerService,
  deleteCustomerService
}