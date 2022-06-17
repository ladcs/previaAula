'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('linksclasses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      classId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'Classes', key: 'id' }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('linksclasses');
  }
};