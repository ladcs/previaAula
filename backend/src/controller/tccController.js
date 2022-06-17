const { StatusCodes } = require('http-status-codes');
const Service = require('../service/TCC/tccService');

module.exports = class Tcc {
  service;
  constructor() {
    this.service = new Service();
  }

  static createTcc = async (req, res, next) => {
    try {
      const { originalname: name, size, filename: key } = req.file;
      const { tcc } = req.body;
      const newTcc = await Service.insert({name, size, key, tcc});
      res.status(StatusCodes.CREATED).json(newTcc);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static delete = async (req, res, next) =>{
    try {
      const { id } = req.params;
      const body = await Service.delete(id);
      res.status(StatusCodes.NO_CONTENT).json(body);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static getAll = async (_req, res, next) => {
    try {
      const allTcc = await Service.getAll();
      res.status(StatusCodes.OK).json(allTcc);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}