module.exports = (app) => {
  app.use('/user', require('./user'));
  app.use('/auth', require('./auth'));
}