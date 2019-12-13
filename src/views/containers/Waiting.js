import React, {Component} from 'react';
import {Text, View, Alert, StyleSheet, Dimensions, Image} from 'react-native';
import Auth from '../../configs/auth';

export default class Waiting extends Component {
  constructor() {
    super();
  }

  moveScreen(screen) {
    this.props.navigation.navigate({
      routeName: screen,
    });
  }
  componentDidMount() {
    setTimeout(async () => {
      const isAuthenticated = await Auth.isAuthenticated();
      isAuthenticated ? this.moveScreen('LoggedIn') : this.moveScreen('Login');
    }, 1000);
  }
  render() {
    return (
      <View style={styleWaiting.container}>
        <Text style={styleWaiting.text}> Loading...</Text>
        <Image
          style={styleWaiting.image}
          source={require('../../assets/images/loading.gif')}
        />
      </View>
    );
  }
}

const {width, height} = Dimensions.get('window');
const styleWaiting = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height,
    width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  image: {
    height: 100,
    width: 100,
  },
});
