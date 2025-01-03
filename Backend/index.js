const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");
const postRoute = require("./Routes/post");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to db"))
  .catch(() => console.log("error"));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log("backend server started");
});
