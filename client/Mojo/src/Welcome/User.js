import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, ImageBackground, StyleSheet} from "react-native";
import defaultStyle from '../style/DefaultStyle';
const remoteImageUrl = 'https://www.dropbox.com/s/vdoplel9fwon5no/image.png';
const localImg = '../images/users/women01.png';

class User extends React.Component {

  render() {
    return (
      <ImageBackground
        // source={{uri: remoteImageUrl}}
        source={require(localImg)}
        style={{width: '100%', height: '100%'}}>



      </ImageBackground>






    );
  }
}

export default User;

