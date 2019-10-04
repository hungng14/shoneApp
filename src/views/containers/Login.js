import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LoginScreen from '../screens/Login';

export default class Login extends Component {
  render() {
    return <LoginScreen {...this.props} />;
  }
}
