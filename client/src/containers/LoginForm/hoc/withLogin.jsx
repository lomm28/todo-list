import React, { useState } from 'react';
import { func, shape } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin, message } from 'antd';

import { loginUser } from '../../../store/actions/user';

const withLogin = Component => {
  const Composed = ({ loginUser, history, ...props }) => {
    const [isLoading, updateLoading] = useState(false);

    const signInUser = (username, password) => {
      updateLoading(true);
      loginUser({ name: username, password })
        .then(() => {
          updateLoading(false);
          message.success('Successfully logged in. :)');
        })
        .then(() => history.push('/todos'))
        .catch(e => {
          updateLoading(false);
          message.error(e.data.msg);
        });
    };

    return (
      <Spin spinning={isLoading}>
        <Component {...props} handleSubmit={signInUser} btnLabel="Login" />
      </Spin>
    );
  };

  Composed.propTypes = {
    loginUser: func.isRequired,
    history: shape({
      push: func.isRequired,
    }).isRequired,
  };

  return connect(null, { loginUser })(withRouter(Composed));
};

export default withLogin;
