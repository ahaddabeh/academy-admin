import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Tabs from './ui/Tabs';

const selectStyle = {
    width: "20%"
}

const handleTabClick = (e) => {
    console.log(e.target.getAttribute("data-content"));
    const content = e.target.getAttribute("data-content");
    // Remove anything with an active tabs and content

    // Mark the current tab that was clicked as active

    // Use the data-content value to mark the content as active
}

const findStudentDetails = (id, student_teacher_arr) => {
    for (let i = 0; i < student_teacher_arr.length; i++) {
        if (id === student_teacher_arr[i].student_id) {
            return student_teacher_arr[i];
        }
    }
    return 0;
}

const getStudentGrades = (student) => {
    return (
        <tbody>
            <tr>
                <td>MATH</td>
                <td>{student.grades.q1.MATH}</td>
                <td>{student.grades.q2.MATH}</td>
                <td>{student.grades.q3.MATH}</td>
                <td>{student.grades.q4.MATH}</td>
            </tr>
            <tr>
                <td>LANG</td>
                <td>{student.grades.q1.LANG}</td>
                <td>{student.grades.q2.LANG}</td>
                <td>{student.grades.q3.LANG}</td>
                <td>{student.grades.q4.LANG}</td>
            </tr>
            <tr>
                <td>READ</td>
                <td>{student.grades.q1.READ}</td>
                <td>{student.grades.q2.READ}</td>
                <td>{student.grades.q3.READ}</td>
                <td>{student.grades.q4.READ}</td>
            </tr>
            <tr>
                <td>HIST</td>
                <td>{student.grades.q1.HIST}</td>
                <td>{student.grades.q2.HIST}</td>
                <td>{student.grades.q3.HIST}</td>
                <td>{student.grades.q4.HIST}</td>
            </tr>
            <tr>
                <td>SCI</td>
                <td>{student.grades.q1.SCI}</td>
                <td>{student.grades.q2.SCI}</td>
                <td>{student.grades.q3.SCI}</td>
                <td>{student.grades.q4.SCI}</td>
            </tr>
        </tbody>)
}


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
    const [activeTab, setActiveTab] = useState()
    console.log(props);
    const student = props.fetchStudent(props.match.params.id);
    const student_teacher = props.fetchStudentTeacher();
    const teachers = props.fetchTeachers();
    const teacher_id = findTeacherID(student, student_teacher);
    const student_details = findStudentDetails(student.id, student_teacher);
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
                <Tabs history={props.history}>
                    <Tabs.List allTabsActive={true}>
                        <Tabs.Tab>Grades</Tabs.Tab>
                        <Tabs.Tab>Attendance</Tabs.Tab>
                        <Tabs.Tab>Emergency</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Content>
                        <Tabs.Panel>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Q1</th>
                                        <th>Q2</th>
                                        <th>Q3</th>
                                        <th>Q4</th>
                                    </tr>
                                </thead>

                                {getStudentGrades(student_details)}
                            </table>
                        </Tabs.Panel>
                        <Tabs.Panel>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Quarter</th>
                                        <th>Date</th>
                                        <th>Marking</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>3</td>
                                        <td>1/27/2020</td>
                                        <td>P</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>1/28/2020</td>
                                        <td>T</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>1/29/2020</td>
                                        <td>A</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Tabs.Panel>
                        <Tabs.Panel>Tab 3 Content</Tabs.Panel>
                        <Tabs.Panel>Tab 4 Content</Tabs.Panel>
                    </Tabs.Content>
                </Tabs>

            </div>
        </Fragment>
    )
}

export default Student;