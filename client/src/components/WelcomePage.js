import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import Chicago from "../images/chicago.png";
import California from "../images/california.jpg";
import Colorado from "../images/colorado.jpg";

const WelcomePage = () => {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const adminData = {
      adminName,
      password,
    };
    try {
      await axios.post("http://localhost:8000/api/register-admin", adminData);
      navigate("/");
    } catch (error) {
      setError(error.res.data.error);
    }
  };

  return (
    <div className="welcomePage">
      <h1>
        <span className="spanRed">Home</span>{" "}
        <span className="spanWhite">Town</span>{" "}
        <span id="logo" className="spanBlue">
          Blog
        </span>
      </h1>
      <br />
      <h4>Click to see about each person's hometown!</h4>
      <div className="welcomePics">
        <Link to={"/hyens-home"} style={{ margin: "10px 55px 0px 50px" }}>
          Hyens's Home
        </Link>
        <Link to={"/dans-home"} style={{ margin: "10px 55px 0px 50px" }}>
          Dan's Home
        </Link>
        <Link to={"/brians-home"} style={{ margin: "10px 55px 0px 50px" }}>
          Brian's Home
        </Link>
      </div>
      <div className="welcomePics">
        <img
          src={California}
          alt="hyen"
          width="250"
          height="150"
          style={{ margin: "0px 10px 0px 10px" }}
        />
        <img
          src={Chicago}
          alt="dan"
          width="250"
          height="150"
          style={{ margin: "0px 10px 0px 10px" }}
        />
        <img
          src={Colorado}
          alt="brian"
          width="250"
          height="150"
          style={{ margin: "0px 10px 0px 10px" }}
        />
      </div>
      <Link to={"/register"}>Register New Admin</Link>
      <footer
        style={{
          margin: "0 auto",
          verticalAlign: "center",
          border: "1px solid black",
          padding: "0px 30px 0px 30px",
          marginTop: "25px",
        }}>
        <form onSubmit={onSubmitHandler}>
          <div>
            <p style={{ marginRight: "0px 30px 0px 30px" }}>
              <label>Admin Username:</label>
              <input
                type="text"
                onChange={(e) => setAdminName(e.target.value)}
              />

              <label>Admin Password:</label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
            <p>
              <input type="submit" className="adminSubmit" />
            </p>
            <Link
              style={{
                width: "120px",
                color: "black",
                height: "25px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "10px",
              }}
              to={"/all-admins"}>
              See Admins
            </Link>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default WelcomePage;
