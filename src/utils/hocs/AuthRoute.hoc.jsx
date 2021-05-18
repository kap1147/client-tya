import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthRoute({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props}> </Component>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}