const getResults = (req, res) => {
  res.json({
    message: "done",
  });
};

const postData = (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    message: "request success",
    data: req.body,
  });
};
module.exports = {
  getResults,
  postData,
};
