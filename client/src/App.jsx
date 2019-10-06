import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import InitialLoader from './containers/InitialLoader';
import store from './store';

import styles from './styles';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div style={styles.container}>
      <Provider store={store}>
        {/* <InitialLoader> */}
        <AppNavigator />
        {/* </InitialLoader> */}
      </Provider>
    </div>
  );
};

export default App;
