require('dotenv').config()
const { default: mongoose } = require('mongoose');
const connection = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(">> Connected to database");
}
module.exports = connection;