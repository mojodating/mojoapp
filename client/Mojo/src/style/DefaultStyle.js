import Dimensions from 'Dimensions';
import {StyleSheet} from "react-native";

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  text: {
    color: 'black',
    backgroundColor: 'gray',
  },
  header: {
    fontSize: 40,
    backgroundColor: 'pink',
  },
  body: {
    fontSize: 15,
  },
  footer: {
    fontSize: 15,
    backgroundColor: 'green',
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backgroundColor: "gray"
  },
});

export default defaultStyle
