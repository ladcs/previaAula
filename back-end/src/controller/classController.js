const { StatusCodes } = require('http-status-codes');
const Service = require('../service/Aula/aula');

module.exports = class Aula {
  service;
  constructor() {
    this.service = new Service();
  }

  static createLink = async (req, res, next) => {
    try {
      const { originalname: name, size, filename: key } = req.file;
      const { id: classId } = req.params;
      const newLink = await Service.insertLink({name, size, key, classId});
      res.status(StatusCodes.CREATED).json(newLink);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static deleteLink = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = await Service.deleteLink(id);
      res.status(StatusCodes.NO_CONTENT).json(body)
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static deleteClass = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = await Service.deleteClass(id);
      res.status(StatusCodes.NO_CONTENT).json(body)
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static createClass = async (req, res, next) => {
    try {
      const { className } = req.body
      const newClass = await Service.insert(className);
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