const router = require('express').Router();

router.post('/', (req, res, next) => {
  console.log(req.body);
});

module.exports = router;