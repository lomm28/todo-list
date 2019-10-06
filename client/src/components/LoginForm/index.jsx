import React, { useState } from 'react';

import { Tabs, Button, Card, Input, Row } from 'antd';

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

const Login = () => {
  const [state, updateState] = useState({
    username: '',
    password: '',
    activeTabIndex: tabs.Register,
    hasError: false,
  });

  const send = event => {
    event.preventDefault();
    const { username, password } = state;
    console.log(username, password);

    // const data = {
    //   username,
    //   password,
    //   csrfToken: this.settings.csrfToken,
    // };
  };

  const handleOnTabChange = activeTabIndex => {
    updateState({ ...state, activeTabIndex });
  };

  const renderRegisterForm = () => {
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
            onClick={send}
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
            onClick={send}
            style={styles.mt20}
            size="large"
          >
            Login
          </Button>
        </Row>
      </div>
    );
  };

  const { activeTabIndex } = state;
  return (
    <div style={styles.container}>
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
            {activeTabIndex === tabs.login && renderLoginForm()}
          </Row>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
