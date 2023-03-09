const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var howSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    desc: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: [],
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("How", howSchema);
