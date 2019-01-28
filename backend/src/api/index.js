const router = require('express').Router();
const user = require('./user');
const upload = require('./upload');
const admin = require('./admin');

router.use('/user', user);
router.use('/upload', upload);
router.use('/admin', admin);

module.exports = router;
