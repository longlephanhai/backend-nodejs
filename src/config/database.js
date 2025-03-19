require('dotenv').config()
const { default: mongoose } = require('mongoose');
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(">> Connected to database");
  } catch (error) {
    console.log(">> Error connection to database", error);
  }
}
module.exports = connection;