const { StatusCodes } = require('http-status-codes');
const Service = require('../service/user/UserService');

module.exports = class User {
  service;
  constructor() {
    this.service = new Service();
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
