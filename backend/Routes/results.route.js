const express = require("express");
const router = express.Router();

const { getResults, postData } = require("../Controller/results.controller");

router.get("/", getResults);
router.post("/:id", postData);
module.exports = router;
