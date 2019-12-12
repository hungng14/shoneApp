import axios from 'axios';
import Auth from '../configs/auth';
import {URL_API, URL_API_DEFAULT} from '../configs';

class Http {
  async signInOrRegister(data, url) {
    try {
      const _url = `${URL_API_DEFAULT}${url}`;
      const result = await axios({
        method: 'POST',
        url: _url,
        data,
        params: data,
      });
      return result.data;
    } catch (error) {
      return error;
    }
  }
  async sendData(data, method, url) {
    try {
      const _url = `${URL_API}${url}`;
      const result = await axios({
        method,
        url: _url,
        data,
        params: data,
        headers: {token: await Auth.getToken()},
      });
      return result.data;
    } catch (error) {
      return error;
    }
  }
}

const ins = new Http();
export default ins;
