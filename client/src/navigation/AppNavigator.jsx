import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import TodosList from '../containers/ToDosList';
import PrivateRoute from './PrivateRoute';

const AppNavigator = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" render={() => <Redirect to="/login" />} exact />
      <Route path="/login" component={LoginForm} exact />
      <PrivateRoute path="/todos" component={TodosList} />
    </Switch>
  </BrowserRouter>
);

export default AppNavigator;
