const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to db"))
  .catch(() => console.log("error"));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));  

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log("backend server started");
});
