import React, { useEffect, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import Loader from "./loader/loader";
import { connect } from "react-redux";
import AuthNav from "./components/Navigation/AuthNav";
import getCurrentUser from "./redux/auth/auth-operations";
import PrivateRoute from "./components/Routes/PrivatRoute/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const Phonebook = lazy(() => import("./components/Phonebook/Phonebook"));

function App({ updateUser }) {
  useEffect(() => {
    updateUser();
  }, [updateUser]);
  return (
    <div>
      <AuthNav />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/home"
            component={Phonebook}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: () => dispatch(getCurrentUser.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
