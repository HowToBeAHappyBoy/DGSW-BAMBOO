const router = require('express').Router();
const userCtrl = require('./user.ctrl');

router.route('/count').get(userCtrl.count);

module.exports = router;
