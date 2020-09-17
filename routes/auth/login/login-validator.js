const { body } = require('express-validator');

module.exports = [
  body('email', "Email is not valid.").isEmail(),
  body('password', 'You should enter a password.').notEmpty(),
];