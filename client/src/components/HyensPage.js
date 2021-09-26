import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import Construction from "../images/construction.gif";
import CommentForm from "./CommentForm";

const HyensPage = () => {
  return (
    <div>
      <h1>Hyens Home Page</h1>
      <br />
      <img src={Construction} alt="construction" width="700" height="400" />
      <button
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        onClick={(e) => (window.location.href = "/")}>
        Home
      </button>
      <CommentForm />
      <footer>
        {/* <button onClick={(event) => (window.location.href = "/")}>Home</button> */}
      </footer>
    </div>
  );
};

export default HyensPage;
