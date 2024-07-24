const express = require("express");
const cors = require("cors");
const emailRouter = require("./routes/emailRoute");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/email", emailRouter);

module.exports = app;
