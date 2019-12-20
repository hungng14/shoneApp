import * as Keychain from 'react-native-keychain';
import {GoogleSignin} from './socialAccount';
class Auth {
  async setAuth(data) {
    const token = {
      token: data.token,
      refresh_token: data.refresh_token,
    };
    const userLogin = {
      email: data.email,
      username: data.username,
      user_o_id: data.user_o_id,
      role: data.role,
    };
    await Auth.setInfoAuth(userLogin, token);
  }

  static async setInfoAuth(val1, val2) {
    const _val1 = JSON.stringify(val1);
    const _val2 = JSON.stringify(val2);
    await Keychain.setGenericPassword(_val1, _val2);
  }

  async getToken() {
    try {
      const data = await Keychain.getGenericPassword();
      const token = data.password ? JSON.parse(data.password) : {};
      return token;
    } catch (error) {
      return {};
    }
  }

  async getUserLogin() {
    const data = await Keychain.getGenericPassword();
    const userLogin = data.username ? JSON.parse(data.username) : {};
    return userLogin;
  }

  async destroyAuth() {
    await GoogleSignin.signOut();
    await Keychain.resetGenericPassword();
  }

  async isAuthenticated() {
    const token = await this.getToken();
    return !!Object.keys(token).length;
  }
}

const ins = new Auth();
export default ins;
