require('dotenv').config();
const Aula = require('../../database/models/class');
const Linksclass = require('../../database/models/linksclass');

module.exports = class AulaService {
  static getAll = async () => {
    const arrayAllTeam = await Aula.findAll();
    return arrayAllTeam;
  };

  static insert = async (body) => {
    const { name, size, key, className } = body;
    let classContent = await Aula.findOne({ where: { class: className } });
    if (!classContent) classContent = await Aula.create({ className });
    const url = `${process.env.APP_URL}/files/${key}`;
    const { id: classId } = classContent;
    const createdLink = await Linksclass.create({ name, size, key, url, classId });
    return createdLink;
  }
}