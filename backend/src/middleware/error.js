const ErrorBase = require('../error/ErrorBase');

module.exports = function errorMiddleware(_req, res, _next) {
  if (err instanceof ErrorBase) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500);
}
