const { Model, DataTypes } = require('sequelize');
const db = require('.');

class Lab extends Model {
}

Lab.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  labClass: DataTypes.STRING,
  link: DataTypes.STRING,
  name: DataTypes.STRING,
  size: DataTypes.STRING,
  key: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'lab',
  timestamps: false,
});


module.exports = Lab;