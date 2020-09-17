const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  hashPassword: async (password) => {
    return bcrypt.hash(password, saltRounds);
  },
  comparePasswords: (password, hashed) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hashed, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
}