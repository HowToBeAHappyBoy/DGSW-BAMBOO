exports.uploadImg = async (req, res) => {
  const imgs = [];
  req.files.forEach((e) => {
    imgs.push(e.location);
  });
  const result = {
    message: 'success',
    imgs,
  };
  res.status(200).json(result);
};
