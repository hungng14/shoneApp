import {GoogleSignin} from '@react-native-community/google-signin';
const CONFIG_SIGN_IN_GOOGLE = {
  offlineAccess: true,
  webClientId:
    '484166784338-9c2ukj1llse69oevk0mp2es3gkhf8991.apps.googleusercontent.com',
};

GoogleSignin.configure(CONFIG_SIGN_IN_GOOGLE);

export const CONFIG_SIGN_IN_FACEBOOK = {
  clientID: '484166784338-9c2ukj1llse69oevk0mp2es3gkhf8991.apps.googleusercontent.com',
  clientSecret: '2mqhijKAA0ZsthD-d9GNxntR',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

export {GoogleSignin};
