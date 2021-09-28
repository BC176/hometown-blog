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

module.exports = {
  createAdmin,
};
