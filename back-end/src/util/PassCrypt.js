const bcryptjs = require('bcryptjs');

module.exports = class PassCrypt {
  constructor() {
    this.crypt = bcryptjs
  }

  async checkPassword(password, passwordDb) {
    return this.crypt.compare(password, passwordDb);
  }

  async crypto(password) {
    return this.crypt.hash(password, this.crypt.genSaltSync());
  }
}
