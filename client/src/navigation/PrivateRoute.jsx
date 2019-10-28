import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const checkAuthToken = () => {
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    return true;
  }
  return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuthToken() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
