import AsyncStorage from '@react-native-community/async-storage';
// import Keychain from 'react-native-keychain';
// console.log(Keychain)
class Auth {
  async setAuth(data) {
    const {token, refresh_token} = data;
    const userLogin = {
      email: data.email,
      username: data.username,
      user_o_id: data.user_o_id,
      role: data.role,
    };
    const infosAuth = [
      ['@token', String(token)],
      ['@userLogin', JSON.stringify(userLogin)],
      ['@refreshToken', JSON.stringify(refresh_token)],
    ];
    // Keychain.setGenericPassword('JSON.stringify(userLogin)', 'token');
    await Auth.setInfoAuth(infosAuth);
  }

  static async setInfoAuth(infosAuth = []) {
    await AsyncStorage.multiSet(infosAuth);
  }

  async getToken() {
    const token = await AsyncStorage.getItem('@token');
    return token || '';
  }

  async getRefreshToken() {
    const refreshToken = await AsyncStorage.getItem('@refreshToken');
    return refreshToken || '';
  }

  async getUserLogin() {
    const userLogin = await AsyncStorage.getItem('@userLogin');
    return userLogin ? JSON.parse(userLogin) : {};
  }

  async destroyAuth() {
    await AsyncStorage.multiRemove(['@token', '@refreshToken', '@userLogin']);
  }

  async isAuthenticated() {
    const token = await this.getToken();
    return !!token;
  }
}

const ins = new Auth();
export default ins;
