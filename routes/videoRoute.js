const express = require("express");
const {
  postVideo,
  getAVideo,
  getAllVideo,
  deleteAVideo,
} = require("../controllers/videoCtrl");
const router = express.Router();

router.post("/post", postVideo);
router.get("/", getAllVideo);
router.get("/:slug", getAVideo);
router.delete("/:id", deleteAVideo);

module.exports = router;
