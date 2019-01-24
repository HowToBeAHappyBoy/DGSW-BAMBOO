const allowPost = require('database/models/allowPost');

exports.count = async (req, res) => {
  try {
    const count = await allowPost.find({}).count();
    if (count) {
      res.status(200).json({
        status: 200,
        count,
      });
    } else {
      res.status(200).json({
        status: 404,
        desc: '글이 없어요!',
      });
    }
  } catch (error) {
    const result = {
      status: 500,
      desc: 'unknown error 서지녁에게 문의할 것',
      error: error.message,
    };
    console.log(error.message);
    res.status(200).json(result);
  }
};
