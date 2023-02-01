const {  validationResult } = require("express-validator");

const errorHandler = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) return next();
  return res.status(400).json({errors: errors.array()})
}

module.exports = errorHandler
