const { Model, DataTypes } = require('sequelize');
const db = require('.');

class Linksclass extends Model {
  static associate(models) {
    // define association here
    linksclass.belongsTo(models.class, { foreignKey: 'classId', as: 'link' });
  }
}
Linksclass.init({
  name: DataTypes.STRING,
  size: DataTypes.STRING,
  key: DataTypes.STRING,
  url: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'linksclass',
});

module.exports = Linksclass;
