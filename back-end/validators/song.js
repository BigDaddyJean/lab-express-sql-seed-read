const { body } = require("express-validator");
const errorHandler = require("./errorHandler");

const createV = [
  body("name").not().isEmpty().withMessage("name is required"),
  body("artist").not().isEmpty().withMessage("artist is required"),
  body("is_favorite").optional().isBoolean(),
  errorHandler
];

module.exports = createV;
