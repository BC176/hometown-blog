const CommentsController = require("../controllers/comments.controller");

module.exports = function (app) {
  app.get("/api", CommentsController.getComments);
  app.post("/api/new-comment", CommentsController.newPost);
  app.delete("/api/:commentID", CommentsController.deleteComment);
};
