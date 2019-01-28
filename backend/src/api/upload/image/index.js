const router = require('express').Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const uuid = require('uuid4');
const {
  accessKeyId,
  secretAccessKey,
  region,
} = require('config/awsconfig.json');
const imageCtrl = require('./image.ctrl');

AWS.config.region = region;
AWS.config.update({
  accessKeyId,
  secretAccessKey,
});
const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'dgsw-bamboo',
    key(req, file, cb) {
      const type = file.mimetype.split('/')[1];
      cb(null, `${uuid()}.${type}`);
    },
    acl: 'public-read-write',
  }),
});

router.route('/').post(upload.array('img'), imageCtrl.uploadImg);

module.exports = router;
