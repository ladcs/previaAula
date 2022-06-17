const { StatusCodes } = require('http-status-codes');
const ErrorBase = require('./ErrorBase');

module.exports = class Conflict extends ErrorBase {
  constructor(message) {
    super(message, StatusCodes.CONFLICT);
  }
}
