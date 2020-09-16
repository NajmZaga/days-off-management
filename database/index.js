const mongoose = require('mongoose');

module.exports = {
  openConnection: (dbURL) => mongoose.connect(dbURL, { useNewUrlParser: true }),
  database: mongoose.connection
};