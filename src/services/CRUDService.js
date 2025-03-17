const connection = require("../config/database")

const getAllUser = async () => {
  const [results, fields] = await connection.query('SELECT * FROM Users')
  return results
}
const getUserById = async (userId) => {
  const [results, fields] = await connection.query(
    `SELECT * FROM Users WHERE id=?`, [userId]
  )
  const user = results && results.length > 0 ? results[0] : {}
  return user
}
module.exports = {
  getAllUser,
  getUserById
}