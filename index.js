const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDb = async () => {
  console.log("I gdg  gdfg dfran gfdg fd");
  try {
    await mongoose.connect("mongodb://navdeep:monu1676@127.0.0.1:27017/dc");
    console.log("conneected db successfully");
  } catch (error) {
    console.log(error.message);
  }
};
connectDb();
app.get("/", (req, res) => {
  res.send("welcome to api pipeline");
});
app.listen(4000, () => {
  console.log("Server is Running on PORT 5000");
});
