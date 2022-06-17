const { StatusCodes } = require('http-status-codes');
const ErrorBase = require('./ErrorBase');

module.exports = class notFound extends ErrorBase {
  constructor(message) {
    super(message, StatusCodes.NOT_FOUND);
  }
}
