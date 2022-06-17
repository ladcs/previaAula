'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('labs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      labClass: {
        type: Sequelize.STRING,
      },
      link: {
        type: Sequelize.STRING,
      },

      name: { type: Sequelize.STRING },
      size: { type: Sequelize.STRING },
      key: { type: Sequelize.STRING }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('labs');
  }
};