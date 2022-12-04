const express = require("express");
const dotEnv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 7000;

const studentRoute = require("./Routes/student.route");
const resultsRoute = require("./Routes/results.route");
app.use(express.json());
app.use("/api/students", studentRoute);
app.use("/api/results", resultsRoute);

app.listen(port, () => {
  console.log("Server runs on port:  " + port);
});
