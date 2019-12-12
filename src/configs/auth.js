import {AsyncStorage} from 'react-native';
import shared from '../utilities/shared';
const {isEmpty} = shared;
class Auth {
  async setAuth(data) {
    const {token} = data;
    const userLogin = {
      email: data.email,
      username: data.username,
      user_o_id: data.user_o_id,
      role: data.role,
    };
    const infosAuth = [
      ['token', token],
      ['userLogin', JSON.stringify(userLogin)],
    ];
    await Auth.setInfoAuth(infosAuth);
  }

  static async setInfoAuth(infosAuth = []) {
    await AsyncStorage.multiSet(infosAuth);
  }

  async getToken() {
    const token = await AsyncStorage.getItem('token');
    return !isEmpty(token) ? token : '';
  }

  async getUserLogin() {
    const userLogin = await AsyncStorage.getItem('userLogin');
    return !isEmpty(userLogin) ? JSON.parse(userLogin) : {};
  }

  async destroyAuth() {
    await AsyncStorage.multiRemove(['token', 'userLogin']);
  }
}

const ins = new Auth();
export default ins;
