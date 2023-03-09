const Video = require("../models/videoModel");
const slugify = require("slugify");

const postVideo = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title.toLowerCase());
    }
    const postVideoData = await Video.create(req.body);
    res.json({
      status: true,
      code: "VIDEO_SUBMITTED",
      msg: "Video Uploaded Successfully!",
      data: postVideoData,
    });
  } catch (error) {
    res.json({
      status: false,
      code: "VIDEO_FAILED",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};

module.exports = {
  postVideo,
};
