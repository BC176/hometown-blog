import React, { useState } from "react";
import Greeley from "../images/greeley.jpg";
import Railroad from "../images/railroad.jpg";
import Pawnee from "../images/pawnee.jpg";
import Logo from "../images/colorado-logo.png";
import CommentForm from "./CommentForm";

const BriansPage = () => {
  return (
    <div>
      <div className="brianTopDiv">
        <h1>
          Brians Home Page{" "}
          <img
            style={{ alignSelf: "center", marginLeft: "10px" }}
            src={Logo}
            alt="logo"
            className="logo"
            width="35"
            height="30"
          />
        </h1>
        <h5>
          Welcome to Greeley, Colorado! Made infamous by South Park, and yes, it
          stinks here.
        </h5>
      </div>
      <div className="brianMidDiv">
        <div style={{ marginRight: 85, marginLeft: 40 }}>
          <p>Thanks, South Park 😅 You're not wrong,</p>
          <p>though. 🐮</p>
          <img src={Greeley} alt="greeley" width="400" height="250" />
        </div>
        <div style={{ marginLeft: 50 }}>
          <p>A fun thing for kids but also really cool for </p>
          <p>adults is the Colorado Model Railroad museum!</p>
          <img src={Railroad} alt="railroad" width="400" height="250" />
        </div>
      </div>
      <div className="brianMidDiv">
        <div style={{ marginRight: 85, marginLeft: 40 }}>
          <p>Beautiful area rich with history and wildlife.</p>
          <p>Lots of people find arrow heads around there, too.</p>
          <img src={Pawnee} alt="pawnee" width="400px" height="250px" />
        </div>
        <div>
          <p>If you ever find yourself in Greeley, look me up!</p>
          <p>I promise to drive you to the nearest highway back out 😂</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194372.99559765746!2d-104.90334848534701!3d40.42927046356227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ea186c8af5e79%3A0xd2cfba804e0a121f!2sGreeley%2C%20CO!5e0!3m2!1sen!2sus!4v1632082844472!5m2!1sen!2sus"
            width="400"
            height="250"
            allowFullScreen=""
            loading="lazy"></iframe>
        </div>
      </div>
      <button
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        onClick={(e) => (window.location.href = "/")}>
        Home
      </button>
      <CommentForm />
      <footer>
        {/* <button onClick={(e) => (window.location.href = "/")}>Home</button> */}
      </footer>
    </div>
  ); //end return
}; //end BriansPage

export default BriansPage;
