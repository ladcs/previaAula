'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class linksclass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      linksclass.belongsTo(models.class, { foreignKey: 'classId', as: 'link' });
    }
  }
  linksclass.init({
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    filename: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'linksclass',
  });
  return linksclass;
};