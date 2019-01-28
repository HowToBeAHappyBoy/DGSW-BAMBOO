const router = require('express').Router();
const certFunc = require('middlewares/jwt');
const certCtrl = require('./cert.ctrl');

router.route('/signup').post(certFunc, certCtrl.signup);
router.route('/signin').post(certCtrl.signin);

module.exports = router;
