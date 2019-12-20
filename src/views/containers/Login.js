import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import Toast from 'react-native-simple-toast';
import firebase from 'react-native-firebase';
import {GoogleSignin} from '../../configs/socialAccount';
// import {LoginButton, AccessToken} from 'react-native-fbsdk';
import LoginScreen from '../screens/Login';
import Auth from '../../configs/auth';
import Http from '../../utilities/http';

const {signInOrRegister} = Http;
export default class Login extends Component {
  constructor() {
    super();
    this.state = {styleWaiting: {}};
    this.modifyValue = this.modifyValue.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signInWithGoogle = this.signInWithGoogle.bind(this);
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
    const {success = false, message = ''} = result;
    if (success) {
      await Auth.setAuth(result.data);
      this.moveScreen();
      return;
    }
    Toast.showWithGravity(message, Toast.LONG, Toast.CENTER);
  }

  async signInWithGoogle() {
    const data = await GoogleSignin.signIn();
    this.setState({styleWaiting: {position: 'absolute', display: 'flex'}});
    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.idToken,
      data.accessToken,
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(async response => {
        const infoUser = response.user.toJSON();
        const params = {
          email: infoUser.email,
          avatar: infoUser.photoUrl,
          phone: infoUser.phoneNumber,
          fullname: infoUser.displayName,
        };
        const result = await signInOrRegister(params, '/sign_in_with_social');
        const {success = false, message = ''} = result;
        if (success) {
          await Auth.setAuth(result.data);
          this.moveScreen();
          return;
        }
        this.setState({styleWaiting: {}});
        Toast.showWithGravity(message, Toast.LONG, Toast.CENTER);
      })
      .catch(_err => {
        this.setState({styleWaiting: {}});
        Toast.showWithGravity('Error occurred!', Toast.LONG, Toast.CENTER);
      });
  }

  render() {
    const mergeProps = {
      signIn: this.signIn,
      modifyValue: this.modifyValue,
      state: this.state,
      signInWithGoogle: this.signInWithGoogle,
    };
    return <LoginScreen {...this.props} {...mergeProps} />;
  }
}
