// /** @format */
// 
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// 
// AppRegistry.registerComponent(appName, () => App);


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './src/components/Main';

export default class Mojo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Mojo', () => Mojo);
