const CommentSchema = require("../models/comment.model");

const newPost = (req, res) => {
  // const { guestName, text } = req.body;
  const { body } = req;
  console.log(req.body);
  CommentSchema.create({
    guestName: body.guestName,
    text: body.text,
  })
    .then((newComment) => res.json(newComment))
    .catch((err) => res.json(err));
};

const getComments = (req, res) => {
  CommentSchema.find()
    .then((allComments) => res.json({ allComments }))
    .catch((err) => console.log(err));
};

const deleteComment = (req, res) => {
  CommentSchema.deleteOne({ _id: req.params.commentID })
    .then((deletedComment) => res.status(200).send("Comment deleted by Admin"))
    .catch((err) => console.log(err));
};

module.exports = {
  // createAdmin,
  newPost,
  getComments,
  deleteComment,
};
