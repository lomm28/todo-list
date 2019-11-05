import React from 'react';
import { shape, string } from 'prop-types';
import { PageHeader, Button, Tag, Spin } from 'antd';

const style = {
  container: {
    backgroundColor: '#F5F5F5',
    padding: 24,
  },
};

const Header = ({ user }) => {
  const renderUser = user ? user.name : <Spin size="small" />;

  const logoutUser = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  return (
    <div style={style.container}>
      <PageHeader
        ghost={false}
        title="Logged in as"
        tags={<Tag color="blue">{renderUser}</Tag>}
        extra={[
          <Button key="logout" onClick={logoutUser}>
            Logout
          </Button>,
        ]}
      />
    </div>
  );
};

Header.propTypes = {
  user: shape({
    name: string.isRequired,
  }).isRequired,
};

export default Header;
