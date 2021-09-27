const BlogController = require("../controllers/blog.controller");
// const CommentsController = require("../controllers/comments.controller");

module.exports = function (app) {
  // app.get("/api/", CommentsController.getComments);
  app.post("/api/register-admin", BlogController.createAdmin);
  // app.post("/api/new-comment", CommentsController.newPost);
  // app.delete("/api/:commentID", CommentsController.deleteComment);
};
