const Admin = require('database/models/admin');

exports.signup = async (req, res) => {
  const {
    id,
    pw,
    name,
  } = req.body;
  try {
    const admin = await Admin.findById(id);
    if (admin !== null) {
      const result = {
        message: '이미 존재하는 어드민',
      };
      res.status(403).json(result);
      return;
    }
    const signupedAdmin = await Admin.signup(id, pw, name);
    const token = await signupedAdmin.urgentToken();
    const result = {
      message: 'successful signup',
      token,
    };
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    const result = {
      message: '서버 에러네요 괜찮아요 원숭이들이 금방 고칠거에요',
    };
    res.status(500).json(result);
  }
};
exports.signin = async (req, res) => {
  const {
    id,
    pw,
  } = req.body;
  try {
    const admin = await Admin.findById(id);
    if (admin.checkPassword(pw)) {
      const token = await admin.urgentToken();
      const result = {
        message: '로그인 성공!',
        token,
      };
      res.status(200).json(result);
      return;
    }
    const result = {
      message: '로그인 실패',
    };
    res.status(400).json(result);
  } catch (error) {
    const result = {
      message: '서버 에러네요 괜찮아요 원숭이들이 금방 고칠거에요',
    };
    console.log(error);
    res.status(500).json(result);
  }
};
