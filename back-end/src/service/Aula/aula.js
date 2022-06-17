require('dotenv').config();
const Aula = require('../../database/models/class');

module.exports = class AulaService {
  static getAll = async () => {
    const arrayAllTeam = await Aula.findAll();
    return arrayAllTeam;
  };

  static insert = async (body) => {
    const { name, size, key, why, content } = body;
    const link = `${process.env.APP_URL}/files/${key}`;
    const created = await Aula.create({ className, why, content })
    return created;
  }
}