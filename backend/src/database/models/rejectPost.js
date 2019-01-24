const mongoose = require('mongoose');

const { Schema } = mongoose;

const rejectPost = Schema({
  idx: { type: Number, require: true, unique: true },
  content: { type: String, require: true, unique: false },
  writeDate: { type: Date, require: true, default: Date.now },
  rejecteDate: { type: Date, require: true, default: Date.now },
  type: { type: Number, require: true, unique: false },
  imgs: { type: [Object], require: false },
  tumb: { type: [Object], require: false },
  writerPicture: { type: String, require: false },
  writerName: { type: String, require: false },
  writerUrl: { type: String, require: false },
  admin: { type: String, require: true },
  reason: { type: String, require: true },
  personalString: { type: String, require: true },
  isRead: { type: Boolean, require: false, default: false },
},
{
  collection: 'rejectPost',
});

module.exports = mongoose.model('rejectPost', rejectPost);
