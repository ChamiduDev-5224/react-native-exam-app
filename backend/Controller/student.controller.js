const getAllStudent = (req, res) => {
  return res.send("api work");
};

const postData = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: "Bad request",
    });
  }
  return res.send(`Id is : ${req.body.name}`);
};

module.exports = {
  getAllStudent,
  postData,
};
