const router = require('express').Router();

const { loginController } = require('./controllers');
const { loginHandler } = require('./handlers');

router.post('/login', loginController, loginHandler);

module.exports = router;