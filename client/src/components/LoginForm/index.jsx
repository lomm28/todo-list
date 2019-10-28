import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Tabs, Button, Card, Input, Row, Spin, message } from 'antd';

import BaseForm from './BaseForm';
import withRegister from './hoc/withLogin';
import withLogin from './hoc/withLogin';
import { createUser, loginUser } from '../../store/actions/user';

const AuthFormWithLogin = withLogin(BaseForm);
const AuthFormWithRegister = withRegister(BaseForm);

const { TabPane } = Tabs;

const tabs = {
  Register: 'Register',
  login: 'Log in',
};

const styles = {
  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
  mt50: { marginTop: 50 },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  login: {
    padding: 10,
    textAlign: 'center',
    minHeight: 260,
    width: '100%',
    maxWidth: 360,
  },
  error: {
    color: 'red',
  },
};

const Login = ({ createUser, loginUser, history }) => {
  const [state, updateState] = useState({
    username: '',
    password: '',
    activeTabIndex: tabs.Register,
    hasError: false,
    loading: false,
  });

  const registerUser = event => {
    event.preventDefault();
    const { username, password } = state;
    updateState({ ...state, loading: true });
    createUser({ name: username, password })
      .then(data => {
        updateState({
          ...state,
          loading: false,
          hasError: false,
          username: '',
          password: '',
        });
        message.success(
          'User successfully created. Please proceed to login section :)',
        );
      })
      .catch(e => {
        updateState({ ...state, hasError: true, loading: false });
        message.error(e.data.msg);
      });
  };

  // const signInUser = event => {
  //   event.preventDefault();
  //   const { username, password } = state;
  //   updateState({ ...state, loading: true });
  //   loginUser({ name: username, password })
  //     .then(data => {
  //       updateState({
  //         ...state,
  //         hasError: false,
  //         loading: false,
  //         username: '',
  //         password: '',
  //       });
  //       message.success('Successfully logged in. :)');
  //     })
  //     .then(() => history.push('/todos'))
  //     .catch(e => {
  //       updateState({ ...state, hasError: true, loading: false });
  //       message.error(e.data.msg);
  //     });
  // };

  const handleOnTabChange = activeTabIndex => {
    updateState({ ...state, activeTabIndex });
  };

  const renderRegisterForm = () => {
    const { username, password, hasError } = state;
    return (
      <div>
        {hasError && <p style={styles.error}>Opps! Something went wrong :(</p>}
        <Row justify="center">
          <Input
            value={username}
            onChange={({ target }) =>
              updateState({ ...state, username: target.value })
            }
            id="username"
            label="Username"
            placeholder="Username"
            autoFocus
          />
          <Input.Password
            value={password}
            onChange={({ target }) =>
              updateState({ ...state, password: target.value })
            }
            id="password"
            label="Password"
            placeholder="Password"
            style={styles.mt10}
          />
          <Button
            type="primary"
            onClick={registerUser}
            style={styles.mt20}
            size="large"
          >
            Register
          </Button>
        </Row>
      </div>
    );
  };

  const renderLoginForm = () => {
    const { username, password, hasError } = state;
    return (
      <div>
        {hasError && <p style={styles.error}>Invalid login or password</p>}
        <Row justify="center">
          <Input
            value={username}
            onChange={({ target }) =>
              updateState({ ...state, username: target.value })
            }
            id="username"
            label="Username"
            placeholder="Username"
            autoFocus
          />
          <Input.Password
            value={password}
            onChange={({ target }) =>
              updateState({ ...state, password: target.value })
            }
            id="password"
            label="Password"
            placeholder="Password"
            style={styles.mt10}
          />
          <Button
            type="primary"
            // onClick={signInUser}
            style={styles.mt20}
            size="large"
          >
            Login
          </Button>
        </Row>
      </div>
    );
  };

  const { activeTabIndex, loading, username, password } = state;
  return (
    <div style={styles.container}>
      <Spin spinning={loading}>
        <Card style={styles.login}>
          <Row direction="column" gutter={16} style={{ height: '100%' }}>
            <Row>
              <Tabs value={activeTabIndex} onChange={handleOnTabChange}>
                <TabPane tab="Register" key={tabs.Register} />
                <TabPane tab="Log in" key={tabs.login} />
              </Tabs>
            </Row>
            <Row direction="column" justify="center">
              {activeTabIndex === tabs.Register && renderRegisterForm()}
              {activeTabIndex === tabs.login && <AuthFormWithLogin />}
            </Row>
          </Row>
        </Card>
      </Spin>
    </div>
  );
};

export default connect(
  null,
  { createUser, loginUser },
)(Login);
