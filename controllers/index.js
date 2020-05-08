const db = require("../models");

const ParentController = require("./ParentController");
const TeacherController = require("./TeacherController");
const StudentController = require("./StudentController");

module.exports = {
    ParentController: new ParentController(db, "Parent"),
    TeacherController: new TeacherController(db, "Teacher"),
    StudentController: new StudentController(db, "Student"),
}