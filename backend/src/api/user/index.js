const router = require('express').Router();
const userCtrl = require('./user.ctrl');

router.route('/count').get(userCtrl.count);
router.route('/post').post(userCtrl.sendPost);

module.exports = router;
