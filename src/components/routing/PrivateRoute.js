import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest },{isAuthenticateds}) => {
 
  return (

    <Route
      {...rest}
      
      render={props =>
        isAuthenticated() ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};



export default connect(null,{})(PrivateRoute);
