const BlogController = require("../controllers/blog.controller");
// const CommentsController = require("../controllers/comments.controller");

module.exports = function (app) {
  app.post("/api/register-admin", BlogController.createAdmin);
};
