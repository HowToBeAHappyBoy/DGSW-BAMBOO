const jwt = require('jsonwebtoken');

const { secret } = require('config/serverconfig.json');

const certFunc = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    const result = {
      status: 401,
      desc: 'token is not exist',
    };
    res.status(401).json(result);
    return;
  }
  const check = new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  const onError = (error) => {
    const result = {
      desc: error.message,
    };
    res.status(403).json(result);
  };

  check
    .then((decoded) => {
      req.decoded = decoded;
      next();
    })
    .catch(onError);
};

module.exports = certFunc;
