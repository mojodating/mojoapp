import React, {Component} from 'react';
import { Provider } from 'mobx-react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/app.navigator';
import stores from './src/stores';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (

      <Provider stores={stores}>
      <AppNavigator/>
      </Provider>

  )
  }
}
