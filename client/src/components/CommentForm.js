import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const CommentForm = (props) => {
  const { commentID } = props;
  const [guestName, setGuestName] = useState("");
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [errors, setErrors] = useState("");
  const { removeFromDom } = "";

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const commentData = {
      guestName: guestName,
      text: text,
    };
    axios
      .post("http://localhost:8000/api/new-comment", commentData)
      .then((res) => {
        console.log("new comment");
      })
      .catch((error) => {
        setErrors(error);
        console.log(error);
      });
    // try {
    //   const newComment = await axios.post(
    //     "http://localhost:8000/api/new-comment",
    //     commentData
    //   );
    //   setPosts([...posts, newComment.data]);
    //   commentData.guestName = "";
    //   commentData.text = "";
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/")
      .then((allComments) => {
        setPosts(allComments.data.allComments);
      })
      .catch((err) => console.log(err));
  });

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:8000/api/${id}`)
      .then((response) => {
        // console.log("deleted");
        removeFromDom(id);
      })
      .catch((err) => console.log(err));
  };

  let btnRef = useRef();

  //onClick delete function here

  return (
    <>
      <form onSubmit={handleSubmitComment}>
        <p
          style={{
            marginLeft: "75px",
            color: "black",
            fontSize: "55px",
            padding: "10px",
            fontFamily: "gothic",
          }}>
          Comments
        </p>
        {errors
          ? Object.keys(errors).map((objKey, index) => (
              <p key={index}>{errors[objKey].message}</p>
            ))
          : null}
        <div className="commentSection">
          <div>
            Guest Name:{" "}
            <input type="text" onChange={(e) => setGuestName(e.target.value)} />
          </div>
          <div>
            Comment:{" "}
            <textarea
              id=""
              cols="30"
              rows="2"
              onChange={(e) => setText(e.target.value)}></textarea>
            <button type="submit" className="addCommentButton">
              Add Comment
            </button>
          </div>
        </div>
      </form>
      <div>
        {
          // posts.length &&
          //   posts.map((comment, index) => (
          //     <div key={index}>
          //       <p style={{ textAlign: "center" }}>
          //         {comment.guestName} commented {comment.text}
          //       </p>
          posts.length > 0 &&
            posts.map((comment, index) => (
              <table>
                <tbody>
                  <tr key={index}>
                    <td>Guest: {comment.guestName}</td>
                    <td>Commented: {comment.text}</td>
                    <td>
                      <button
                        ref={btnRef}
                        onClick={deleteComment}
                        style={{
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}>
                        🔺 Delete Post
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))
        }
      </div>
    </>
  ); //end return
}; //end CommentForm

export default CommentForm;
