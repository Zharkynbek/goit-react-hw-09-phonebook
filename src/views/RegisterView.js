import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";

function RegisterView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ email, password, name }));
  };

  return (
    <div>
      <h1 style={{ visibility: "hidden" }}>Registration Page</h1>
      <h1>Registration Page</h1>

      <form onSubmit={handleSubmit} autoComplete="on">
        <label>
          <p> Name</p>
          <input type="text" name="name" value={name} onChange={updateName} />
        </label>

        <label>
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
        </label>

        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </label>
        <br />

        <Button type="submit" variant="contained" color="secondary">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default RegisterView;
