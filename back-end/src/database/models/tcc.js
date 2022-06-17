const { Model, DataTypes } = require('sequelize');
const db = require('.');

  class TCC extends Model {
  }
  TCC.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tcc: DataTypes.STRING,
    link: DataTypes.STRING,
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    key: DataTypes.STRING
  }, {
    sequelize: db,
    modelName: 'tcc',
    timestamps: false,
  });

module.exports = TCC;
