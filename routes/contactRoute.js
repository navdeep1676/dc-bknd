const express = require("express");
const { postContact } = require("../controllers/contactCtrl");
const router = express.Router();

router.post("/post", postContact);

module.exports = router;
