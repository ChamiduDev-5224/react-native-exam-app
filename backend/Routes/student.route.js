const express = require("express");
const router = express.Router();
const { getAllStudent, postData } = require("../Controller/student.controller");

router.get("/", getAllStudent);
router.post("/:id", postData);
module.exports = router;
