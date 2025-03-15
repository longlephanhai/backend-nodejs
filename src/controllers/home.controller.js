const handleGetHomePage = (req, res) => {
  res.send('Hello World with me!')
}
const getABC = (req, res) => {
  res.render('sample.ejs')
}
module.exports = {
  handleGetHomePage,
  getABC
}