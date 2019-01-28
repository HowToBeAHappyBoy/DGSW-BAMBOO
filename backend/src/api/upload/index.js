const router = require('express').Router();
const image = require('./image');

router.use('/image', image);

module.exports = router;
