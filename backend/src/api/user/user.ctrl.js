const allowPost = require('database/models/allowPost');

exports.count = async (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      count: await allowPost.find({}).count(),
    });
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
