'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(20),
        field: "first_name"
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(20),
        field: "last_name"
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING(6),
        field: "gender"
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(80),
        field: "address"
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(10),
        field: "phone"
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(20),
        field: "email"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "deleted_at",
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parents');
  }
};