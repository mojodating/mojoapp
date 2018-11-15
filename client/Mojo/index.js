import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Main from './src/components/Main';
import AppNavigator from './src/app.navigator';


export default class Mojo extends Component {
  render() {
    return (
        <AppNavigator/>
    //   <View style={styles.container}>
    //   // <Main/>
    // </View>

  );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF'
//   }
// });


AppRegistry.registerComponent('Mojo', () => Mojo);
