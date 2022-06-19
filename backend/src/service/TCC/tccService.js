const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const Tcc = require('../../database/models/tcc');
const notFound = require('../../error/notFound');

module.exports = class TccService {
  static getAll = async () => {
    const arrayAllTeam = await Tcc.findAll();
    return arrayAllTeam;
  };

  static async changeTccName(tcc, id) {
    await Tcc.update({ tcc }, { where: { id } });
  }

  static insert = async (body) => {
    const { key } = body;
    const link = `${process.env.APP_URL}/files/${key}`;
    const created = await Tcc.create({ ...body, link });
    return created;
  }

  static delete = async (id) => {
    const tcc = await Tcc.findByPk(id);
    if (!tcc) throw new notFound('file not exist');
    const { key } = tcc;
    promisify(fs.unlink)(path.resolve(__dirname, '..', '..', '..', '..', 'uploads', key));
    await Tcc.destroy({ where: { id } });
    return { body: 'deleted complete' };
  }
}