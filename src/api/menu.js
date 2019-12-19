import http from '../utilities/http';

class Menu {
  async list(data) {
    try {
      const result = await http.sendData(data, 'POST', '/menu_res/list');
      return result;
    } catch (error) {
      return error;
    }
  }
}

export default new Menu();
