import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import Toast from 'react-native-simple-toast';
import firebase from 'react-native-firebase';
import {GoogleSignin} from '@react-native-community/google-signin';
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
    console.log('1', '');
    // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    await GoogleSignin.configure({
      offlineAccess: true,
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '484166784338-9c2ukj1llse69oevk0mp2es3gkhf8991.apps.googleusercontent.com',

      // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      // webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      // forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    const data = await GoogleSignin.signIn();
    console.log('1', data);
    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.idToken,
      data.accessToken,
    );
    console.log('2', credential);
    // login with credential
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    // console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword('dunggoilaanh@gmail.com', 'caohung123456')
    //   .then(function (result) {
    //     console.log('result', result);
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = result.credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user;
    //     // ...
    //   })
    //   .catch(function (error) {
    //     console.log('error', error);
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    //   });
    // const result = await signInOrRegister(params, '/sign_in');
    // const {success = false, message = ''} = result;
    // if (success) {
    //   await Auth.setAuth(result.data);
    //   this.moveScreen();
    //   return;
    // }
    // Toast.showWithGravity(message, Toast.LONG, Toast.CENTER);
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
