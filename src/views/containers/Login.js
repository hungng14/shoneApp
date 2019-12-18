import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import Toast from 'react-native-simple-toast';

import LoginScreen from '../screens/Login';
import Auth from '../../configs/auth';
import Http from '../../utilities/http';

const {signInOrRegister} = Http;
export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
    this.modifyValue = this.modifyValue.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  moveScreen() {
    this.props.navigation.navigate({
      routeName: 'LoggedIn',
    });
  }

  modifyValue(stateName, value) {
    this.setState({[stateName]: value});
  }

  async signIn() {
    const params = {
      username: this.state.username,
      password: this.state.password,
    };
    const result = await signInOrRegister(params, '/sign_in');
    console.log(result)
    const {success = false, message = ''} = result;
    if (success) {
      await Auth.setAuth(result.data);
      this.moveScreen();
      return;
    }
    Toast.showWithGravity(message, Toast.LONG, Toast.CENTER);
  }

  render() {
    const mergeProps = {
      signIn: this.signIn,
      modifyValue: this.modifyValue,
      state: this.state,
    };
    return <LoginScreen {...this.props} {...mergeProps} />;
  }
}
