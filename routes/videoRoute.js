const express = require("express");
const { postVideo } = require("../controllers/videoCtrl");
const router = express.Router();

router.post("/post", postVideo);

module.exports = router;
