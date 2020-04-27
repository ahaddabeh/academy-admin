'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      motherId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "mother_id",
        unique: false,
        references: {
          model: "parents",
          key: "id"
        }
      },
      fatherId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "father_id",
        unique: false,
        references: {
          model: "parents",
          key: "id"
        }
      },
      teacherId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "teacher_id",
        unique: false,
        references: {
          model: "teachers",
          key: "id"
        }
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
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "age"
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING(6),
        field: "gender"
      },
      grade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "grade"
      },
      grades: {
        allowNull: true,
        type: Sequelize.JSON,
        field: "grades"
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(80),
        field: "address"
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
    return queryInterface.dropTable('students');
  }
};