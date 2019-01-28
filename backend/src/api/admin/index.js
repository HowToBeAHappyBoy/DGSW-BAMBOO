const certFunc = require('middlewares/jwt');

const router = require('express').Router();
const adminCtrl = require('./admin.ctrl');
const cert = require('./cert');

router.route('/count/:type').get(certFunc, adminCtrl.count);
router.route('/reject').post(certFunc, adminCtrl.reject);
router.use('/cert', cert);

module.exports = router;
