const AdminController = require("../controllers/admin.controller");

module.exports = function (app) {
  app.get("/api/admins", AdminController.getAllAdmins);
  app.post("/api/register-admin", AdminController.createAdmin);
  app.delete("/api/:adminID", AdminController.deleteAdmin);
};
