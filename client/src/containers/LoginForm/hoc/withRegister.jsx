import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Spin, message } from 'antd';

import { createUser } from '../../../store/actions/user';

const withRegister = Component => {
  const Composed = ({ createUser, ...props }) => {
    const [isLoading, updateLoading] = useState(false);

    const registerUser = (username, password) => {
      updateLoading(true);
      createUser({ name: username, password })
        .then(data => {
          updateLoading(false);
          message.success(
            'User successfully created. Please proceed to login section :)',
          );
        })
        .catch(e => {
          updateLoading(false);
          message.error(e.data.msg);
        });
    };

    return (
      <Spin spinning={isLoading}>
        <Component {...props} handleSubmit={registerUser} btnLabel="Register" />
      </Spin>
    );
  };

  return connect(
    null,
    { createUser },
  )(Composed);
};

export default withRegister;
