const BlogController = require("../controllers/blog.controller");

module.exports = function (app) {
  app.get("/api/", BlogController.getComments);
  app.post("/api/register-admin", BlogController.createAdmin);
  app.post("/api/new-comment", BlogController.newPost);
  app.delete("/api/:commentID", BlogController.deleteComment);
};
