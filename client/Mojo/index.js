import React, {Component} from 'react';
import { Provider } from 'mobx-react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Main from './src/components/Main';
import AppNavigator from './src/app.navigator';
import stores from './src/stores';


export default class Mojo extends Component {
  render() {
    return (
      <Provider stores={stores}>
      <AppNavigator/>
      </Provider>

  )
  }
}

AppRegistry.registerComponent('Mojo', () => Mojo);
