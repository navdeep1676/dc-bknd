const express = require("express");
const {
  postProject,
  getAProject,
  getAllProject,
  deleteAProject,
} = require("../controllers/projectCtrl");
const router = express.Router();

router.post("/post", postProject);
router.get("/", getAllProject);
router.get("/:slug", getAProject);
router.delete("/:id", deleteAProject);

module.exports = router;
