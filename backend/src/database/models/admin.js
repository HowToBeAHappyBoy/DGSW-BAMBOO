const mongoose = require('mongoose');

const { Schema } = mongoose;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const {
  secret,
} = require('config/serverconfig.json');

const Admin = Schema({
  id: { type: String, require: true, unique: true },
  password: { type: String, require: true, unique: false },
  name: { type: String, require: true, unique: false },
}, {
  collection: 'admin',
});
Admin.statics.signup = function (id, pw, name) {
  const cipher = crypto.createCipher('aes-256-cbc', secret);
  let resultId = cipher.update(id, 'utf8', 'base64');
  resultId += cipher.final('base64');


  const resultPw = crypto.createHmac('sha1', secret)
    .update(pw)
    .digest('base64');


  return new this({
    id: resultId,
    password: resultPw,
    name,
  }).save();
};

Admin.statics.findById = function (_id) {
  const cipher = crypto.createCipher('aes-256-cbc', secret);
  let id = cipher.update(_id, 'utf8', 'base64');
  id += cipher.final('base64');
  return this.findOne({ id }).exec();
};

Admin.methods.checkPassword = function (pw) {
  const resultPw = crypto.createHmac('sha1', secret)
    .update(pw)
    .digest('base64');
  return this.password === resultPw;
};

Admin.methods.urgentToken = function () {
  return new Promise((resolve, reject) => {
    jwt.sign({
      _id: this._id,
      admin: this.name,
    },
    secret, {
      issuer: 'dgswbamboo.oa.to',
      subject: 'usertoken',
      expiresIn: '3h',
    }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

module.exports = mongoose.model('Admin', Admin);
