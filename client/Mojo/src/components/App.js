import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Welcome from './../Welcome/Welcome';
import UserList from './../Welcome/UserList';
import ajax from '../ajax';

export default class App extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   users: ["dummyUser1"],
    // };
  }


  async componentDidMount() {
    // const users = await ajax.fetchUsers();
    // console.log(users);
    //
    // this.setState((prevState) => {
    //   return {users};
    // });

    // this.handleShowWelcomeModal();
  }

  render() {
    return (
      <View >


        <Welcome
          // isVisible={this.state.isModalWelcomeVisible}
        />


        {/*{this.state.users.length > 0 ? (*/}
          {/*<UserList users={this.state.users}/>*/}
        {/*) : (*/}
          {/*<Text style={styles.footer}> Splash </Text>*/}
        {/*)}*/}


        {/*{ this.state.isPopupTrue &&*/}
        {/*(<View style={styles.overlay} opacity={0.9}>*/}
        {/*<View style={styles.popup}>*/}
        {/*<Text style={styles.text}> Overlay </Text>*/}
        {/*</View>*/}
        {/*</View>)*/}
        {/*}*/}

        {/*<Text style={styles.header}>Add image</Text>*/}

        {/*<Text style={styles.body}>Welcome to the house of Mojo, a virtual bar in a decentralized universe, where you can send or receive drinks and make friends!</Text>*/}
        {/*<Text style={styles.body}>Good lick and enjoy. </Text>*/}

        {/*<Text style={styles.footer}>Sign up</Text>*/}
        {/*<Text style={styles.footer}>Start as visitor</Text>*/}

        {/*<Text style={styles.footer}>Already have an account? Login(Pink)</Text>*/}

      </View>
    );
  }
}
