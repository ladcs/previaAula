const Unauthorized = require('../error/Unauthorized');
const Token = require('../util/token');

module.exports = function auth(req, _res, next) {
  const decode = new Token();
  const { authorization: token } = req.headers;
  if (!token) throw new Unauthorized('token is required');
  const user = decode.decode(token);
  if (typeof user === 'string') throw new Unauthorized(user);
  req.user = user;
  next();
}
