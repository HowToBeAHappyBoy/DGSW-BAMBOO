const allowPost = require('database/models/allowPost');
const rejectPost = require('database/models/rejectPost');
const waitPost = require('database/models/waitPost');
const { camelKeys } = require('change-object-case');


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

exports.sendPost = async (req, res) => {
  try {
    const {
      ...data
    } = camelKeys(req.body);
    const overlapReject = await rejectPost.find({
      personalString: data.personalString,
      isRead: false,
    });
    const overlapWait = await waitPost.find({
      personalString: data.personalString,
      isChange: false,
    });
    const overlapCheck = Object.assign(
      overlapReject,
      overlapWait,
    );
    if (overlapCheck.length) {
      const result = {
        status: 401,
        error: '개인 확인 문자열 중복, 바꿔주세요',
      };
      res.status(200).json(result);
      return;
    }
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
      status: 200,
      desc: '성공',
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
