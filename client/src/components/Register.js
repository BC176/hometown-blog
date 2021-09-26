import React, { useState } from "react";
import axios from "axios";

const Register = (props) => {
  const [confirmReg, setConfirmReg] = useState("");
  const [error, setError] = useState({});

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();

    axios
      .post("http://local:8000/api/register", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        setConfirmReg("Registered!");
        setError({});
      })
      .catch((err) => {
        console.log(err);
        setError(err.res.data.errors);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      {confirmReg ? <h5>{confirmReg}</h5> : null}
      <form onSubmit={register}>
        <div>
          <label>First Name: </label>
          {error.firstName ? <span>{error.firstName.message}</span> : null}
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Lasst Name: </label>
          {error.lastName ? <span>{error.lastName.message}</span> : null}
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          {error.email ? <span>{error.email.message}</span> : null}
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password: </label>
          {error.password ? <span>{error.password.message}</span> : null}
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          {error.confirmPassword ? (
            <span>{error.confirmPassword.message}</span>
          ) : null}
          <input
            type="password"
            name="confirmPassword"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
