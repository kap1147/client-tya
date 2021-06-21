import React from "react";
import { Route, Redirect } from "react-router-dom";
// Redux 
import { useSelector } from "react-redux";

export default function AuthRoute({
  component: Component,
  ...rest }) {
    const auth = useSelector((state) => state.auth);
    return (
      <Route
        {...rest}
        render={(props) =>
          auth.authenticated ? (
            <Component {...props} token={auth.accessToken} > </Component>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
}
