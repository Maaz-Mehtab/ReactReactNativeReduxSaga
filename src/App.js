import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {store} from './config/store/store3';

import Navigation from './features/v1/Navigation/Navigation.web';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}