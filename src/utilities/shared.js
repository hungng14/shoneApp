import is_empty from 'is-empty';

class Shared {
  async isEmpty(value) {
    return is_empty(value);
  }
}

const ins = new Shared();
export default ins;
