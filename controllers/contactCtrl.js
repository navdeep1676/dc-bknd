const Contact = require("../models/contactModel");

const postContact = async (req, res) => {
  try {
    const postContactData = await Contact.create(req.body);
    res.json({
      staus: true,
      code: "CONTACT_FORM_SUBMITTED",
      msg: "We appreciate you contacting Developer's Corner. We will get back in touch with you soon! Have a great day",
      data: postContactData,
    });
  } catch (error) {
    res.json({
      staus: false,
      code: "CONTACT_FORM_FAILED",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};

module.exports = {
  postContact,
};
