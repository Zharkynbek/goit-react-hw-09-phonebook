import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";

function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      authOperations.login({
        email,
        password,
      })
    );
  };

  return (
    <div>
      <h1 style={{ visibility: "hidden" }}>Please, Sign In</h1>
      <h1>Please, Sign In</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
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
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginView;
