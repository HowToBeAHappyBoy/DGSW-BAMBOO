const router = require('express').Router();
const user = require('./user');
const upload = require('./upload');

router.use('/user', user);
router.use('/upload', upload);

module.exports = router;
