const BadRequest = require('../../error/BadRequest');

module.exports = class LoginError {
  static dadaOkay(password, user) {
    if (!(!password || !user)) return;
    throw new BadRequest('All fields must be filled');
  }
}
