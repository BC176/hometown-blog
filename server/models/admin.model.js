const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AdminSchema = new mongoose.Schema(
  {
    userName: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

AdminSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

AdminSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords must match");
  }
  next();
});

AdminSchema.pre("save", function (next) {
  bcrypt
    .hash(this.password, 8)
    .then((hashedPass) => {
      this.password = hashedPass;
      next();
    })
    .catch((err) => console.log(err));
});

module.exports = mongoose.model("Admin", AdminSchema);
