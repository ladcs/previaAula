const { StatusCodes } = require('http-status-codes');
const ErrorBase = require('./ErrorBase');

module.exports = class Unauthorized extends ErrorBase {
  constructor(message) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}
