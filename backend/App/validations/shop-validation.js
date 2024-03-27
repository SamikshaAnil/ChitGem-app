const Shop = require("../models/shop-model")

const shopRegisterValidationSchema = {
  shopname: {
    notEmpty: {
      errorMessage: "shopname is required",
    },
    trim: true,
  },
  email: {
    notEmpty: {
      errorMessage: "email is required",
    },
    isEmail: {
      errorMessage: "email should be a valid email address",
    },
    normalizeEmail: true,
    trim: true,
  },
  location: {
    notEmpty: {
      errorMessage: "location is required",
    },
  },
  contact: {
    notEmpty: {
      errorMessage: "number is required",
    },
    isNumeric: {
      errorMessage: "enter only numbers",
    },
    isLength: {
      options: {min: 10,max: 10},
      errorMessage: "enter a valid number",
    },
  },
  description: {
    notEmpty: {
      errorMessage: "enter the description",
    },
    isLength: {
      options: {min: 50,max: 500},
      errorMessage: "description should have minimum of 100 words",
    },
  },
}

module.exports = shopRegisterValidationSchema
