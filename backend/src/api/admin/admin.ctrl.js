const allowPost = require('database/models/allowPost');
const rejectPost = require('database/models/rejectPost');
const waitPost = require('database/models/waitPost');

exports.count = async (req, res) => {
  const {
    type,
  } = req.params;
  try {
    switch (type) {
      case '0':
        res.status(200).json({
          stats: 200,
          count: await waitPost.find({}).count(),
        });
        break;
      case '1':
        res.status(200).json({
          stats: 200,
          count: await rejectPost.find({}).count(),
        });
        break;
      case '2':
        res.status(200).json({
          stats: 200,
          count: await allowPost.find({}).count(),
        });
        break;
      default:
        res.status(200).json({
          stats: 401,
          desc: '타입이 잘못됐어요',
        });
        break;
    }
  } catch (error) {
    const result = {
      status: 500,
      error: error.message,
    };
    console.log(error.message);
    res.status(200).json(result);
  }
};
exports.reject = async (req, res) => {
  const {
    idx,
    reason,
  } = req.body;
  const {
    admin,
  } = req.decoded;
  try {
    const post = await waitPost.findOne({ idx });
    if (!post || post.isChange === true) {
      const result = {
        status: 404,
        desc: '해당 idx의 대기 글이 없어요',
      };
      res.status(200).json(result);
      return;
    }
    const {
      content,
      writeDate,
      type,
      writerName,
      writerPicture,
      writerUrl,
      imgs,
    } = post;

    await rejectPost.create({
      idx,
      content,
      writeDate,
      writerName,
      writerPicture,
      writerUrl,
      type,
      reason,
      admin,
      imgs,
    });
    await waitPost.updateOne({ idx }, { $set: { isChange: true } });
    const result = {
      status: 200,
      desc: 'successful request',
    };
    res.status(200).json(result);
  } catch (error) {
    const result = {
      status: 500,
      error: error.message,
    };
    console.log(error.message);
    res.status(200).json(result);
  }
};
