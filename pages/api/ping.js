export default (req, res) => {
  setTimeout(() => {
    res.status(200).json({})
  }, 3000);
}