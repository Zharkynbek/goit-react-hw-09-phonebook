import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { gsap, Power3 } from "gsap";

import { useDispatch, useSelector } from "react-redux";
import { isAuthorized, getUsername } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";

export default function AuthNav() {
  const dispatch = useDispatch();
  const authorized = useSelector(isAuthorized);
  const userName = useSelector(getUsername);

  let navigation = useRef(null);
  const onLogout = () => dispatch(logout());
  console.log(authorized);
  useEffect(() => {
    gsap.fromTo(
      navigation,
      1.5,
      {
        y: -150,
      },
      {
        y: 0,
        ease: Power3.easeInOut,
      }
    );
  }, []);
  return (
    <div ref={(el) => (navigation = el)}>
      <div>
        <NavLink to="/" className="Home">
          <Button variant="contained" color="secondary">
            Home
          </Button>
        </NavLink>
        {authorized && (
          <NavLink to="/contacts" className="Contacts">
            <Button variant="contained" color="secondary">
              Contacts
            </Button>
          </NavLink>
        )}
      </div>
      {!authorized ? (
        <div>
          <NavLink to="/register" className="HomePageSignUp">
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </NavLink>
          <NavLink to="/login" className="HomePageSignIn">
            <Button variant="contained" color="secondary">
              Sign In
            </Button>
          </NavLink>
        </div>
      ) : (
        <div>
          <h1 style={{ visibility: "hidden" }}>Please, Sign In</h1>
          <p className="userName">
            Hello, <span>{userName}</span>
          </p>
          <div className="Logout">
            {" "}
            <Button variant="contained" color="secondary" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
