const { StatusCodes } = require('http-status-codes');
const Service = require('../service/Aula/aula');

module.exports = class Aula {
  service;
  constructor() {
    this.service = new Service();
  }

  static createClass = async (req, res, next) => {
    try {
      const { originalname: name, size, filename: key } = req.file;
      const { why, className } = req.body
      const aula = await Service.insert({ className, name, size, key, why,content, otherSourcer });
      res.status(StatusCodes.CREATED).json(newClass);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static getAll = async (_req, res, next) => {
    try {
      const allClass = await Service.getAll();
      res.status(StatusCodes.OK).json(allClass);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}