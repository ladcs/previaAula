const { StatusCodes } = require('http-status-codes');
const Unauthorized = require('../error/Unauthorized');
const Service = require('../service/user/UserService');

module.exports = class User {
  service;
  constructor() {
    this.service = new Service();
  }

  changePassword = async (req, res, next) => {
    try {
      const { authorization: token } = req.headers;
      if (!token) throw new Unauthorized('token is required');
      const { password } = req.body;
      await this.service.changePassword(token, password)
      res.status(StatusCodes.OK).json('Updated')
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  createUser = async (req, res, next) => {
    try {
      const { user, password } = req.body;
      const createdNewUser = await this.service.newUser(user, password);
      res.status(StatusCodes.CREATED).json(createdNewUser);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  login = async (req, res, next) => {
    try {
      const { user, password } = req.body;
      const login = await this.service.login(user, password);
      req.headers.authorization = login.token;
      res.status(StatusCodes.OK).json(login);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
