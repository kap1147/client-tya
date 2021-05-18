import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthRoute({
  component: Component,
  user,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        user.authenticated ? (
          <Component {...props}> </Component>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}