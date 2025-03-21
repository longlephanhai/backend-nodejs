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
module.exports = {
  createCustomerService,
  createArrayCustomerService
}