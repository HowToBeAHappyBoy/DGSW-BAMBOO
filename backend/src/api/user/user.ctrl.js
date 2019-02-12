const allowPost = require('database/models/allowPost');
const waitPost = require('database/models/waitPost');
const { camelKeys } = require('change-object-case');


exports.count = async (req, res) => {
  try {
    const count = await allowPost.find({}).count();
    if (count) {
      res.status(200).json({
        message: '조회에 성공했어요',
        count,
      });
    } else {
      res.status(404).json({
        message: '글이 없어요',
      });
    }
  } catch (error) {
    const result = {
      message: '서버 에러네요 괜찮아요 원숭이들이 금방 고칠거에요',
    };
    console.log(error.message);
    res.status(500).json(result);
  }
};

exports.sendPost = async (req, res) => {
  try {
    const {
      ...data
    } = camelKeys(req.body);
    const lastPost = await waitPost.findOne().sort({ idx: -1 });
    if (lastPost === null) {
      data.idx = 1;
    } else {
      data.idx = lastPost.idx + 1;
    }
    console.log(data.idx);
    await waitPost.create(data);
    console.log(data);
    const result = {
      message: '제보에 성공했어요',
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

exports.getPost = async (req, res) => {
  const {
    count,
  } = req.params;
  try {
    const post = await allowPost.find({}, { __v: false, _id: false }).sort({ idx: -1 }).limit(5).skip(parseInt(count, 10));
    if (post.length) {
      res.status(200).json({
        message: '오홍홍 좋아용',
        post,
      });
    } else {
      res.status(404).json({
        message: '글이 없어요',
      });
    }
  } catch (error) {
    const result = {
      message: '서버 에러네요 괜찮아요 원숭이들이 금방 고칠거에요',
    };
    console.log(error.message);
    res.status(500).json(result);
  }
};
