const connection = require("../config/database");

const handleGetHomePage = (req, res) => {
  let users = [];
  connection.query(
    'SELECT * FROM users',
    function (err, results, fields) {
      users = results;
      console.log("results: ", users); // results contains rows returned by server
      res.json(users);
    }
  );

}

const getABC = (req, res) => {
  res.render('sample.ejs')
}

module.exports = {
  handleGetHomePage,
  getABC
}