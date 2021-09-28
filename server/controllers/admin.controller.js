const Admin = require("../models/admin.model");

const createAdmin = (req, res) => {
  const { body } = req;
  console.log(req.body);
  Admin.create({
    userName: body.userName,
    password: body.password,
  })
    .then((newAdmin) => res.json(newAdmin))
    .catch((err) => res.json(err));
};

const getAllAdmins = (req, res) => {
  Admin.find()
    .then((allAdmins) => res.json({ allAdmins }))
    .catch((err) => console.log(err));
};

const deleteAdmin = (req, res) => {
  Admin.deleteOne({ _id: req.params.adminID })
    .then((deletedAdmin) => res.status(200).send("Admin deleted by Admin"))
    .catch((err) => console.log(err));
};

module.exports = {
  createAdmin,
  getAllAdmins,
  deleteAdmin,
};
