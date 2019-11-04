import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import store from './store';

import styles from './styles';
import 'antd/dist/antd.css';
import './styles/antd.css';

const App = () => {
  return (
    <div style={styles.container}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </div>
  );
};

export default App;
