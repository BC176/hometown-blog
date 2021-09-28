const Blog = require("../models/blog.model");

const createAdmin = (req, res) => {
  const { userName, password } = req.body;
  Blog.create({
    userName,
    password,
  })
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
};

const getAllAdmins = (req, res) => {
  Blog.find()
    .then((allAdmins) => res.json({ allAdmins }))
    .catch((err) => console.log(err));
};

const deleteAdmin = (req, res) => {
  Blog.deleteOne((deletedAdmin) =>
    res.status(200).send("Admin Deleted by Admin")
  ).catch((err) => console.log(err));
};

module.exports = {
  createAdmin,
  getAllAdmins,
  deleteAdmin,
};
