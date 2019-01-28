exports.uploadImg = async (req, res) => {
  const imgs = [];
  req.files.forEach((e) => {
    imgs.push(e.location);
  });
  const result = {
    status: 200,
    desc: 'success',
    imgs,
  };
  res.status(200).json(result);
};
