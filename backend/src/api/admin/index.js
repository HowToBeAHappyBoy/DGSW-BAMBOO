const certFunc = require('middlewares/jwt');

const router = require('express').Router();
const adminCtrl = require('./admin.ctrl');

router.route('/count/:type').get(certFunc, adminCtrl.count);

module.exports = router;
