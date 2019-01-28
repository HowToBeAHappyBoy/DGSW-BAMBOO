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
        status: 409,
        desc: '이미 존재하는 어드민',
      };
      res.status(200).json(result);
      return;
    }
    const signupedAdmin = await Admin.signup(id, pw, name);
    const token = await signupedAdmin.urgentToken();
    const result = {
      status: 201,
      desc: 'successful signup',
      admin: signupedAdmin.name,
      token,
    };
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    const result = {
      status: 500,
      error,
    };
    res.status(200).json(result);
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
        status: 200,
        desc: 'successful login',
        token,
      };
      res.status(200).json(result);
      return;
    }
    const result = {
      status: 401,
      desc: 'login failed',
    };
    res.status(200).json(result);
  } catch (error) {
    const result = {
      status: 500,
      desc: 'error',
    };
    console.log(error);
    res.status(200).json(result);
  }
};
