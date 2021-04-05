import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {store} from './src/config/store/store2';
// import Navigation from './src/features/Navigation/Navigation.native';
import Navigation from './src/features/v1/Navigation/Navigation.native';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}



