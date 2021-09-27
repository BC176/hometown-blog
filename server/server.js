const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("./config/mongoose.config");
// app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const AdminRoutes = require("./routes/blog.routes");
const CommentRoutes = require("./routes/comment.routes");
AdminRoutes(app);
CommentRoutes(app);
app.listen(8000, () => {
  console.log("Express is listening at Port 8000");
});
