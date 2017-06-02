import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Navigator from './Navigator';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
