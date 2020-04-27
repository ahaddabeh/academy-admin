'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define('Parent', {
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
    email: {
      allowNull: false,
      type: DataTypes.STRING(20),
      field: "email"
    },
  }, {
    tableName: "parents",
    underscored: true,
    timestamps: true,
    paranoid: true
  });
  Parent.associate = function (models) {
    // associations can be defined here
    Parent.hasMany(models.Student, {
      as: "mother",
      foreignKey: "motherId",
      sourceKey: "id",
    })
    Parent.hasMany(models.Student, {
      as: "father",
      foreignKey: "fatherId",
      sourceKey: "id",
    })
  };
  return Parent;
};