import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import ModalGreeting from './ModalGreeting';
import OverlayScreen from './OverlayScreen';
import User from './User';


export default class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalWelcomeVisible: true,
    };
  }

  // BROKEN
  // componentDidMount() {
  //   this.handleShowWelcomeModal();
  // }

  handleShowWelcomeModal = () => {
    this.setState({isModalWelcomeVisible: true});
  }

  handleDismissedShowWelcomeModal = () => {
    this.setState({isModalWelcomeVisible: false});
  }


  render() {

    return ([

      <ModalGreeting key="modalGreeting"/>,
      <OverlayScreen key="overlayScreen"/>,
      <User key="user"/>,



    ]);
  }
}

