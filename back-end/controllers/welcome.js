const welcome = async (_req, res) => {
  return res.status(200).send("Welcome to Tuner")
}

module.exports = welcome;
