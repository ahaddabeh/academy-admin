const db = require("../models");

const ParentController = require("./ParentController");
const TeacherController = require("./TeacherController");
const StudentController = require("./StudentController");

module.exports = {
    ParentController: new ParentController(db),
    TeacherController: new TeacherController(db),
    StudentController: new StudentController(db),
}