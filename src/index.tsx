import { View } from 'react-native';
import * as React from 'react';
import Navigator from '@/navigator/index'
import { Provider } from "react-redux";
import store from '@/config/dva'
import '@/config/http'

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
