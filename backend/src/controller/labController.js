const { StatusCodes } = require('http-status-codes');
const Service = require('../service/lab/labService');

module.exports = class Lab {
  service;
  constructor() {
    this.service = new Service();
  }

  static createLab = async (req, res, next) => {
    try {
      const { labClass } = req.body;
      const { originalname: name, size, filename: key } = req.file;
      const newLab = await Service.insertLab({ name, size, key, labClass });
      res.status(StatusCodes.CREATED).json(newLab);
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
      const allLab = await Service.getAll();
      res.status(StatusCodes.OK).json(allLab);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}