const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const BlogSchema = new mongoose.Schema(
  {
    userName: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

BlogSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

BlogSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords must match");
  }
  next();
});

BlogSchema.pre("save", function (next) {
  bcrypt.hash(thus.password, 8).then((hashedPass) => {
    this.password = hashedPass;
    next();
  });
});

module.exports = mongoose.model("Blog", BlogSchema);
