require('dotenv').config();
const Aula = require('../../database/models/class');
const Linksclass = require('../../database/models/linksclass');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const notFound = require('../../error/notFound');

module.exports = class AulaService {
  static getAll = async () => {
    const arrayAllTeam = await Aula.findAll({
      include: [{
        model: Linksclass,
        attributes: ['url', 'name'],
      }]
    });
    return arrayAllTeam;
  };

  static changeNameFileLink = async (name, id) => {
    await Linksclass.update({ name }, { where: { id } });
  }

  static changeClassName = async (className, id) => {
    await Aula.update({class: className}, { where: { id } });
  }
  static deleteLink = async (id) => {
    const link = await Linksclass.findByPk(id);
    if (!link) throw new notFound('link not exist');
    const { key } = link;
    promisify(fs
      .unlink)(path
      .resolve(__dirname, '..', '..', '..', '..', 'uploads', key));
    await Aula.destroy({ where: { id } })
    return { body: 'deleted complete' };
  }

  static deleteClass = async (id) => {
    const classId = id;
    const arrayLinks = await Linksclass.findAll({ where: { classId } });
    arrayLinks
      .forEach((link) => promisify(fs
      .unlink)(path
      .resolve(__dirname, '..', '..', '..', '..', 'uploads', link
      .key)));
    await Aula.destroy({ where: { id } })
    return { body: 'deleted complete' };
  }

  static insertLink = async (body) => {
    const { key } = body
    const url = `${process.env.APP_URL}/files/${key}`;
    const createdLink = await Linksclass.create({ ...body, url });
    return createdLink;
  }

  static insert = async (className) => {
    const createdClass = await Aula.create({ class: className });
    return createdClass;
  }
}