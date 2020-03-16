import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    fetchStudentTeacher,
    fetchStudent,
    fetchTeachers
} from '../api';



const findTeacherID = (student, student_teachers) => {
    for (let i = 0; i < student_teachers.length; i++) {
        if (student.id === student_teachers[i].student_id) {
            return student_teachers[i].teacher_id;
        }
    }
    return 0;
}
const findTeacher = (id, teachers) => {
    for (let i = 0; i < teachers.length; i++) {
        if (id === teachers[i].id) {
            return (teachers[i].first_name + " " + teachers[i].last_name);
        }
    }
    return 0;
}

const Student = (props) => {
    console.log(props);
    const student = props.fetchStudent(props.match.params.id);
    const student_teacher = props.fetchStudentTeacher();
    const teachers = props.fetchTeachers();
    const teacher_id = findTeacherID(student, student_teacher);
    const teacherName = findTeacher(teacher_id, teachers);
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2>Student Name: {student.first_name + " " + student.last_name}</h2>
                    </div>
                    <div className="col-md">

                        <p><span>Student ID: </span>{student.id}</p>
                        <p><span>Grade: </span>{student.grade}</p>
                        <p><span>Age: </span>{student.age}</p>
                        <p><span>Gender: </span>{student.gender}</p>
                        <p><span>Teacher: </span>{teacherName}</p>
                        <p><span>Absences: </span>4</p>
                        <p><span>Address: </span>{student.address}</p>
                        <p><span>Parent(s): </span>Mama Chiellini, Baba Chiellini</p>
                        <p><span>GPA: </span>3.2</p>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Student;