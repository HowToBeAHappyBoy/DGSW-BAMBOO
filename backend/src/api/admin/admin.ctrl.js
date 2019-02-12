const allowPost = require('database/models/allowPost');
const rejectPost = require('database/models/rejectPost');
const waitPost = require('database/models/waitPost');
const facebook = require('middlewares/facebook');

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
        res.status(400).json({
          message: '타입이 잘못됐어요',
        });
        break;
    }
  } catch (error) {
    const result = {
      message: '서버 에러네요 괜찮아요 원숭이들이 금방 고칠거에요',
    };
    console.log(error.message);
    res.status(500).json(result);
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
        message: '해당 idx의 대기 글이 없어요',
      };
      res.status(404).json(result);
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
      message: '거절 성공해써요',
    };
    res.status(200).json(result);
  } catch (error) {
    const result = {
      message: '서버 에러네요 괜찮아요 원숭이들이 금방 고칠거에요',
    };
    console.log(error.message);
    res.status(500).json(result);
  }
};

exports.allow = async (req, res) => {
  const {
    idx: id,
  } = req.params;
  const { admin } = req.decoded;
  console.log(id);
  try {
    const post = await waitPost.findOne({ idx: id });
    if (!post || post.isChange === true) {
      const result = {
        message: '해당 idx의 대기 글이 없어요',
      };
      res.status(404).json(result);
      return;
    }

    const lastPost = await allowPost.findOne().sort({ idx: -1 }).limit(1);
    let idx;
    // eslint-disable-next-line no-unused-expressions
    if (lastPost === null) {
      idx = 1;
    } else {
      console.log(lastPost);
      idx = lastPost.idx + 1;
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
    let posting = `#대소고_${idx}번째_이야기 \n${writeDate.toLocaleString()}\n\n\n${content}`;
    if (type) {
      posting += `\n\n\n\n${writerName}님(${writerUrl}) 제보`;
    } else {
      posting += '\n\n\n\n 익명 제보';
    }
    if (imgs.length) {
      const fb = await facebook.uploadWithImg(imgs, posting);
      if (fb.type === 'error') {
        const result = {
          message: '서버 에러네요 괜찮아요 원숭이들이 금방 고칠거에요',
        };
        console.log(fb.error);
        res.status(500).json(result);
        return;
      }
    } else {
      const fb = await facebook.uploadWithoutImg(posting);
      if (fb.type === 'error') {
        const result = {
          message: '서버 에러네요 괜찮아요 원숭이들이 금방 고칠거에요',
        };
        console.log(fb.error);
        res.status(500).json(result);
        return;
      }
    }
    await allowPost.create({
      idx,
      content,
      admin,
      imgs,
      writeDate,
      type,
      writerName,
      writerPicture,
      writerUrl,
    });
    await waitPost.updateOne({ idx: id }, { $set: { isChange: true } });
    const result = {
      message: '성공했어용',
    };
    res.status(200).json(result);
  } catch (error) {
    const result = {
      message: '서버 에러네요 괜찮아요 원숭이들이 금방 고칠거에요',
    };
    console.log(error.message);
    res.status(500).json(result);
  }
};

exports.getPost = async (req, res) => {
  const {
    count,
    type,
  } = req.query;
  try {
    switch (type) {
      case '0':
        res.status(200).json({
          stats: 200,
          post: await waitPost
            .find({ isChange: false }, {
              __v: false,
              _id: false,
            })
            .sort({ idx: 1 })
            .limit(5)
            .skip(parseInt(count, 10)),
        });
        break;
      case '1':
        res.status(200).json({
          stats: 200,
          post: await rejectPost
            .find({}, {
              __v: false,
              _id: false,
            })
            .sort({ idx: -1 })
            .limit(5)
            .skip(parseInt(count, 10)),
        });
        break;
      case '2':
        res.status(200).json({
          stats: 200,
          post: await allowPost
            .find({}, {
              __v: false,
              _id: false,
            })
            .sort({ idx: -1 })
            .limit(5)
            .skip(parseInt(count, 10)),
        });
        break;
      default:
        res.status(400).json({
          stats: 400,
          desc: '타입이 잘못됐어요',
        });
        break;
    }
  } catch (error) {
    const result = {
      message: '서버 에러네요 괜찮아요 원숭이들이 금방 고칠거에요',
    };
    console.log(error.message);
    res.status(500).json(result);
  }
};
