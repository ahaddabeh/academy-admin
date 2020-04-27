'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
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
    gender: {
      allowNull: false,
      type: DataTypes.STRING(6),
      field: "gender"
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(80),
      field: "address"
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING(10),
      field: "phone"
    },
    grade: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "grade"
    },
  }, {
    tableName: "teachers",
    underscored: true,
    timestamps: true,
    paranoid: true
  });
  Teacher.associate = function (models) {
    // associations can be defined here
  };
  return Teacher;
};