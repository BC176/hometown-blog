import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const RegisterAdmin = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const adminData = {
      userName: userName,
      password: password,
      confirmPassword: confirmPassword,
    };
    axios
      .post("http://localhost:8000/api/register-admin", adminData)
      .then((res) => {
        // navigate("/");
        console.log(adminData);
      })
      .catch((err) => setErr(err.response.data.error));
  };

  return (
    <>
      <form action="" onSubmit={onSubmitHandler}>
        <h1>Admin Registration</h1>
        <div>
          <label htmlFor="">Admin Username</label>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <label htmlFor="">Admin Password</label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <footer>
        <button onClick={(e) => (window.location.href = "/")}>Home</button>
      </footer>
    </>
  );
};

export default RegisterAdmin;
