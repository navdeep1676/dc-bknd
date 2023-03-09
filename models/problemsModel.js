const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var quesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    desc: {
      type: String,
      required: true,
    },
    tags: {
      type: [],
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    answers: {
      type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Answers" }],
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Questions", quesSchema);
