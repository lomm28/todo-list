import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import { profile } from '../../store/selectors/user';
import { startSession } from '../../store/actions/session';

const style = {
  spinContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
};

const renderSpin = () => (
  <div style={style.spinContainer}>
    <Spin size="large" />
  </div>
);

const InitialLoader = ({ children, profile, startSession }) => {
  useEffect(() => {
    startSession();
  }, [startSession]);

  return profile ? children : renderSpin();
};

InitialLoader.propTypes = {
  children: PropTypes.node.isRequired,
  profile: PropTypes.shape({}),
};

InitialLoader.defaultProps = {
  profile: null,
};

const mapStateToProps = state => {
  return {
    profile: profile(state),
  };
};

export default connect(
  mapStateToProps,
  { startSession },
)(InitialLoader);
