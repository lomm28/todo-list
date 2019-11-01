import React, { useState } from 'react';
import { Tabs, Card, Row, Spin } from 'antd';

import BaseForm from './BaseForm';
import withRegister from '../../containers/LoginForm/hoc/withRegister';
import withLogin from '../../containers/LoginForm/hoc/withLogin';

const AuthFormWithLogin = withLogin(BaseForm);
const AuthFormWithRegister = withRegister(BaseForm);

const { TabPane } = Tabs;

const tabs = {
  Register: 'Register',
  login: 'Log in',
};

const styles = {
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
    activeTabIndex: tabs.Register,
  });

  const handleOnTabChange = activeTabIndex => {
    updateState({ activeTabIndex });
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
            {activeTabIndex === tabs.Register && <AuthFormWithRegister />}
            {activeTabIndex === tabs.login && <AuthFormWithLogin />}
          </Row>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
