const { Model, DataTypes } = require('sequelize');
const db = require('.');

class Linksclass extends Model {
}
Linksclass.init({
  name: DataTypes.STRING,
  originalname: DataTypes.STRING,
  size: DataTypes.STRING,
  key: DataTypes.STRING,
  url: DataTypes.STRING,
  classId: DataTypes.INTEGER,
}, {
  sequelize: db,
  modelName: 'linksclass',
  timestamps: false,
});

module.exports = Linksclass;
