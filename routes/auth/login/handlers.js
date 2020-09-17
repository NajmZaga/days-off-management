const { validationResult } = require('express-validator/check');
const User = require('./../../../models/user');
const { comparePasswords } = require('../../../utils/password-utils');
const { generateToken } = require('../../../utils/jwt-utils');

module.exports = {
  loginHandler: (req, res, next) => {
    const { email, password } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      } else {
        User.findOne({ 'email': email }).then((user) => {
          if (!user) return res.status(404).json({
            message: `The user ${ email } is not exist.`
          });
          comparePasswords(password, user.password).then((match) => {
            if (!match) return res.status(401).json({
              message: 'Bad Credentials'
            });
            return res.status(200).json({
              token: generateToken({ id: user._id })
            });
          });
        }).catch((err) => {
          console.log(err);
        });
      }
    } catch (error) {
      return next(error);
    }
  },
};