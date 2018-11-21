import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from "react-native";
const overlayImg = '../images/welcome/overlay.png';

class OverlayScreen extends React.Component {

  render() {
    return (


        <Image source={require(overlayImg)} style={styles.imageContainer}>
        </Image>



    );
  }
}

export default OverlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(69,85,117,0.7)',
  }
})