import React, { useState } from 'react';
import { Button, Input, Row } from 'antd';

const styles = {
  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
};

const BaseForm = ({ btnLabel, handleSubmit, ...props }) => {
  const [creds, updateCreds] = useState({ username: '', password: '' });

  const { username, password } = creds;

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(username, password);
  };

  return (
    <Row justify="center">
      <Input
        value={username}
        onChange={({ target }) =>
          updateCreds({ ...creds, username: target.value })
        }
        id="username"
        label="Username"
        placeholder="Username"
        autoFocus
      />
      <Input.Password
        value={password}
        onChange={({ target }) =>
          updateCreds({ ...creds, password: target.value })
        }
        id="password"
        label="Password"
        placeholder="Password"
        style={styles.mt10}
      />
      <Button
        type="primary"
        onClick={onSubmit}
        style={styles.mt20}
        size="large"
      >
        {btnLabel}
      </Button>
    </Row>
  );
};

export default BaseForm;
