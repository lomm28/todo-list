import React from 'react';
import { node, string } from 'prop-types';
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

PrivateRoute.propTypes = {
  component: node.isRequired,
  location: string.isRequired,
};

export default PrivateRoute;
