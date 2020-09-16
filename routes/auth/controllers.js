module.exports = {
  loginController: (req, res, next) => {
    console.log(`controller ${ req.body.email }`);
    next();
  },
};