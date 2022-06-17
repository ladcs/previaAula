const { StatusCodes } = require('http-status-codes');
const ErrorBase = require('./ErrorBase');

module.exports = class BadRequest extends ErrorBase {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
