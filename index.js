const express = require("express");
const app = express();
const connectDb = require("./config/dbConnect");
const contactRoute = require("./routes/contactRoute");
const videoRoute = require("./routes/videoRoute");
const projectRoute = require("./routes/projectRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
connectDb();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Welcome to Server Side");
});
app.use("/v1/contact", contactRoute);
app.use("/v1/video", videoRoute);
app.use("/v1/project", projectRoute);
app.listen(4000, () => {
  console.log("Server is Running on PORT 4000");
});
