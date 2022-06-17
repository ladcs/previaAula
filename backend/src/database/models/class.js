const { Model, DataTypes } = require('sequelize');
const db = require('.');
const Linksclass = require('./linksclass');

class Class extends Model {
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

Class.hasMany(Linksclass, { foreignKey: 'classId' });
Linksclass.belongsTo(Class, { foreignKey: 'classId' })
module.exports = Class;
