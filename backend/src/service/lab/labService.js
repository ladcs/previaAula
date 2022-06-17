const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const Lab = require('../../database/models/lab');
const notFound = require('../../error/notFound');

module.exports = class LabService {
  static getAll = async () => {
    const arrayAllTeam = await Lab.findAll();
    return arrayAllTeam;
  };
  
  static delete = async (id) => {
    const lab = await Lab.findByPk(id);
    if (!lab) throw new notFound('file not exist');
    const { key } = lab;
    promisify(fs.unlink)(path.resolve(__dirname, '..', '..', '..', '..', 'uploads', key));
    await Lab.destroy({ where: { id } });
    return { body: 'deleted complete' };
  }

  static insertLab = async (body) => {
    const { key } = body;
    const link = `${process.env.APP_URL}/files/${key}`;
    const created = await Lab.create({ ...body, link });
    return created;
  }
}