import Auth from './auth';
import {URL_API_DEFAULT} from './index';

function configAxios(axios) {
  axios.interceptors.response.use(
    async response => {
      const res = response.data;
      const {status_code} = res;
      if (status_code === 1005) {
        const paramsRefreshToken = {
          token: Auth.getToken(),
          refresh_token: Auth.getRefreshToken(),
        };
        const _res = await axios({
          method: 'POST',
          url: `${URL_API_DEFAULT}/refresh_token`,
          data: paramsRefreshToken,
          params: paramsRefreshToken,
        });
        const infoNewToken = _res.data;
        if (infoNewToken.success) {
          Auth.setAuth(infoNewToken.data);
          const {config} = response;
          config.headers.token = infoNewToken.data.token;
          const callbackRequest = await axios.request(config);
          return callbackRequest;
        }
        Auth.destroyAuth();
        document.location.href = '/';
      }
      return response;
    },
    error => Promise.reject(error),
  );
}

export default configAxios;
