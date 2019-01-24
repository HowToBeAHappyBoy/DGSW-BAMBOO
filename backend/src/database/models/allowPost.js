const mongoose = require('mongoose');

const { Schema } = mongoose;

const allowPost = Schema({
  idx: { type: Number, require: true, unique: true },
  content: { type: String, require: true, unique: false },
  writeDate: { type: Date, require: true, default: Date.now },
  allowDate: { type: Date, require: true, default: Date.now },
  type: { type: Number, require: true, unique: false },
  imgs: { type: [Object], require: false },
  tumb: { type: [Object], require: false },
  writerPicture: { type: String, require: false },
  writerName: { type: String, require: false },
  writerUrl: { type: String, String, require: false },
  admin: { type: String, require: true },
}, {
  collection: 'allowPost',
});
module.exports = mongoose.model('allowPost', allowPost);
