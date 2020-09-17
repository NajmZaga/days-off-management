const jwt = require('jsonwebtoken');

module.exports = {
  generateToken: (data) => {
    data.exp = Math.floor(Date.now() / 1000) - 30;
    return jwt.sign(data, process.env.SECRET);
  }
}