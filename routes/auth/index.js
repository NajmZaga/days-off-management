const router = require('express').Router();

const loginController = require('./login/login-validator');
const { loginHandler } = require('./login/handlers');

router.post('/login', loginController, loginHandler);

module.exports = router;