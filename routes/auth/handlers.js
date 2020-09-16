module.exports = {
  loginHandler: (req, res, next) => {
    console.log(`handler ${ req.body.email }`);
    next();
  },
};