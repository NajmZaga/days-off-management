const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = async (password) => {
  return bcrypt.hash(password, saltRounds);
};