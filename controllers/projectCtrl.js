const Project = require("../models/ProjectModel");
const slugify = require("slugify");

const postProject = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title.toLowerCase());
    }
    const postProjectData = await Project.create(req.body);
    res.json({
      status: true,
      code: "PROJECT_SUBMITTED",
      msg: "Project Uploaded Successfully!",
      data: postProjectData,
    });
  } catch (error) {
    res.json({
      status: false,
      code: "PROJECT_FAILED",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};
const getAProject = async (req, res) => {
  const { slug } = req.params;
  try {
    const getAProjectData = await Project.findOne({ slug: slug });
    res.json({
      status: true,
      code: "PROJECT_FOUND",
      msg: "Project Found Successfully!",
      data: getAProjectData,
    });
  } catch (error) {
    res.json({
      status: false,
      code: "PROJECT_NOT_FAILED",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};
const getAllProject = async (req, res) => {
  try {
    const getAllProjectData = await Project.find();
    res.json({
      status: true,
      code: "PROJECT_FOUND",
      msg: "Projects Found Successfully!",
      data: getAllProjectData,
    });
  } catch (error) {
    res.json({
      status: false,
      code: "PROJECT_NOT_FOUND",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};
const deleteAProject = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProject = await Project.findByIdAndDelete(id);
    res.json({
      status: true,
      code: "PROJECT_DELETED",
      msg: "Project Deleted Successfully!",
      data: deleteProject,
    });
  } catch (error) {
    res.json({
      status: false,
      code: "PROJECT_NOT_DELETED",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};
module.exports = {
  postProject,
  getAProject,
  getAllProject,
  deleteAProject,
};
