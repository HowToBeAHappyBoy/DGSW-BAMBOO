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
