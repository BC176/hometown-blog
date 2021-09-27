const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    userName: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
