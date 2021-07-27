import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthorized } from "../../../redux/auth/auth-selectors";

export default function PublicRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const authenticated = useSelector(isAuthorized);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        authenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
