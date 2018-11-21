import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {View, Text, ImageBackground } from "react-native";
import defaultStyle from '../style/DefaultStyle';

const overlayImg = '../images/welcome/overlay.png';


const ModalGreeting = ({isVisible, onBackDropPress,}) => (


  <Modal
    isVisible={isVisible}
    onBackdropPress={onBackDropPress}
  >

    <ImageBackground
      source={require(overlayImg)}
      style={{width: '100%', height: '100%'}}>

      <View>
      <Text>
        Welcome to house of mojo

        House of mojo is a virtual bar where you can send or receive drinks and make friends.


        Let's get it started

        Already have an account? Login


      </Text>
      </View>

    </ImageBackground>

  </Modal>
);

ModalGreeting.propTypes = {
  isVisible: PropTypes.bool,
  onBackDropPress: PropTypes.func,
};

export default ModalGreeting

