import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import HeaderApp from '../layouts/Header';
import Auth from '../../configs/auth';
import Modal from '../components/Modal';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  onLoad() {
    console.log('onload');
  }
  async logout() {
    await Auth.destroyAuth();
    this.props.navigation.navigate('Login');
  }
  render() {
    const {navigation} = this.props;
    const params = navigation.getParam('ScreenName');
    const titleHeader = {
      titleHeader: 'Account',
    };
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <HeaderApp {...titleHeader} />
        <View style={styles.videoContainer}>
          <Button onPress={this.logout}>Logout</Button>
          {/* <Modal /> */}
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
