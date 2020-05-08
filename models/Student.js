'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    teacherId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "teacher_id"
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(20),
      field: "first_name"
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(20),
      field: "last_name"
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "age"
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING(6),
      field: "gender"
    },
    grade: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "grade"
    },
    grades: {
      allowNull: true,
      type: DataTypes.JSON,
      field: "grades"
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(80),
      field: "address"
    },
  }, {
    tableName: "students",
    underscored: true,
    timestamps: true,
    paranoid: true
  });
  Student.associate = function (models) {
    // associations can be defined here
    Student.belongsToMany(models.Parent, { through: "parents_students" })
    Student.belongsTo(models.Teacher, {
      as: "teacher",
      foreignKey: "teacherId",
      targetKey: "id",
    })
  };
  return Student;
};