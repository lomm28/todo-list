import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import TodosList from '../containers/ToDosList';
import PrivateRoute from './PrivateRoute';
import { checkAuthToken } from './utils';

const AppNavigator = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        render={() => {
          const route = checkAuthToken() ? '/todos' : '/login';
          return <Redirect to={route} />;
        }}
        exact
      />
      <Route path="/login" component={LoginForm} exact />
      <PrivateRoute path="/todos" component={TodosList} />
    </Switch>
  </BrowserRouter>
);

export default AppNavigator;
