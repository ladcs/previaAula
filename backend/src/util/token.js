const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

module.exports = class Token {
  _SECRET = readFileSync('jwt.evaluation.key', 'utf-8') || 'super_senha';
  _JWT_CONFIG = { expiresIn: '2h' };

  create(info) {
    const { expiresIn } = this._JWT_CONFIG;
    const token = jwt.sign(info, this._SECRET, { expiresIn, algorithm: 'HS256' });

    return token;
  }

  decode(token) {
    const test = token.split(' ');
    const tokenTest = !test[1] ? token : test[1];
    return jwt.verify(tokenTest, this._SECRET);
  }
}
