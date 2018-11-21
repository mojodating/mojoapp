import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import PropTypes from 'prop-types';
import listStyle from '../style/ListStyle';

class UserList extends React.Component {

  // static propTypes = {
  //   users: PropTypes.array.isRequired,
  // };

  render() {
    return (
      <View style={listStyle}>

        <Text > UserList </Text>

      </View>
    );
  }
}

export default UserList;