const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);


'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const parents = db.get("parents").value().map(parent => (
      {
        id: parent.id,
        phone: parent.phone_number,
        first_name: parent.first_name,
        last_name: parent.last_name,
        email: parent.email,
        address: parent.address,
        gender: parent.gender
      }));
    const students = db.get("students").value().map(student => ({
      id: student.id,
      first_name: student.first_name,
      last_name: student.last_name,
      age: student.age,
      gender: student.gender,
      grade: student.grade,
      address: student.address,
      teacher_id: student.teacher_id,
      grades: JSON.stringify(student.grades),
    }));
    const parents_students = []
    db.get("students").value().map(student => {
      parents_students.push({
        parent_id: student.mother_id,
        student_id: student.id
      });
      parents_students.push({
        parent_id: student.father_id,
        student_id: student.id
      });
    });
    const teachers = db.get("teachers").value().map(teacher => ({
      id: teacher.id,
      phone: teacher.phone_number,
      first_name: teacher.first_name,
      last_name: teacher.last_name,
      grade: teacher.grade,
      address: teacher.address,
      gender: teacher.gender
    }));
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface
      .bulkInsert("parents", parents)
      .then(() => queryInterface.bulkInsert("teachers", teachers))
      .then(() => queryInterface.bulkInsert("students", students))
      .then(() => queryInterface.bulkInsert("parents_students", parents_students))
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
