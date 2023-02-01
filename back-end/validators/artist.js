const { body } = require("express-validator");
const errorHandler = require("./errorHandler");

const createV = [
  body("name").not().isEmpty().withMessage("name is required"),
  body("age").not().isEmpty().withMessage("age is required").isInt().withMessage("Age must be a number"),
  body("nationality").not().isEmpty().withMessage("nationality is required"),
  body("gender").not().isEmpty().withMessage("gender is required"),
  body("genre").not().isEmpty().withMessage("genre is required"),
  errorHandler
];

module.exports = createV;
