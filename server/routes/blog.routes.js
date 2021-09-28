const BlogController = require("../controllers/blog.controller");
// const CommentsController = require("../controllers/comments.controller");

module.exports = function (app) {
  app.get("/api/admins", BlogController.getAllAdmins);
  app.post("/api/register-admin", BlogController.createAdmin);
  app.delete("/api/:adminID", BlogController.deleteAdmin);
};
