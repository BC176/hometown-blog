import React from "react";
// import { Link, navigate } from "@reach/router";
// import axios from "axios";
import StCharles from "../images/saintCharles.jpg";
import Scarecrow from "../images/Scarecrow.jpg";
import CommentForm from "./CommentForm";

const DansPage = () => {
  return (
    <div className="dansPage">
      <div>
        <h1 style={{ textAlign: "center" }}>Dans Home Page</h1>
        <h5>Welcome to St.Charles, Illinois!</h5>
        <img src={StCharles} alt="St.Charles" width="400" height="250" />
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>
          The bar capital of the state all you have to do is walk
        </h2>
        <h2 style={{ textAlign: "center" }}>
          on the main street and you have your pick.
        </h2>
        <p style={{ textAlign: "center" }}>
          St. Charles is 45 miles away from Chicago. Nice neighborhoods plenty
          of parks.
        </p>
        <p style={{ textAlign: "center" }}>
          In October between the 8th and 10th is the 36th annual Scarecrow
          Festival.
        </p>
        <img
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          src={Scarecrow}
          alt="scarecrow fest"
          width="400"
          height="250"
        />
      </div>
      <div>
        <p>If ever come out this way please stop on by for a drink.</p>
      </div>
      <br />
      <div>
        <iframe
          src="https://www.youtube.com/embed/z2W8kEYbRgs"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
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

export default DansPage;
