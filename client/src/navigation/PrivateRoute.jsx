import React from 'react';
import { shape } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { checkAuthToken } from './utils';

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

PrivateRoute.defaultProps = {
  location: {},
};

PrivateRoute.propTypes = {
  component: shape({}).isRequired,
  location: shape({}),
};

export default PrivateRoute;
