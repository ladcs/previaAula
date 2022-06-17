const { Model, DataTypes } = require('sequelize');
const db = require('.');

class Class extends Model {
  static associate(models) {
    // define association here
    Class.hasMany(models.linksclass, { foreignKey: 'classId', as: 'links' });
  }
}

Class.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  class: DataTypes.STRING,
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'Class',
});

module.exports = Class;
