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
const updateUserById = async (id, email, name, city) => {
  await connection.query(
    `UPDATE Users
     SET email=?, name = ?, city= ?
     WHERE id = ?`,
    [email, name, city, id]
  )
}
const deleteUserById = async (id) => {
  await connection.query(
    `DELETE FROM Users WHERE id=?`,
    [id]
  )
}
module.exports = {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById
}