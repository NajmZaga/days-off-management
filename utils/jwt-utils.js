const jwt = require('jsonwebtoken');

module.exports = {
  generateToken: (data) => {
    data.exp = Math.floor(Date.now() / 1000) + (60 * 60);
    return jwt.sign(data, process.env.SECRET);
  }
}