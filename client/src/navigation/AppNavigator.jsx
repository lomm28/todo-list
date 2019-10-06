import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const AppNavigator = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginForm} exact />
        <Route path="/login" component={() => null} exact />
        <Route path="/todos" component={() => null} exact />
        <Route path="*" component={() => null} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppNavigator;
