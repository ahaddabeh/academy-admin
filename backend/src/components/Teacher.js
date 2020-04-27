import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
    fetchTeacher,
    fetchStudents
} from '../api'

const arrayOfStudents = (students, id) => {
    let arr = [];
    for (student of students) {
        if (student.teacher_id === id) {
            arr.push(student);
        }
    }
    return arr;
}

const makeStudentTable = (students) => {
    return students.map((student) =>
        <tr key={`${student.id}_${student.first_name}_${student.last_name}`}>
            <td>{student.last_name}</td>
            <td>{student.first_name}</td>
            <td>
                <Link to={`/student/${student.id}`}>
                    <button type="button" className="btn btn-info btn-sm">Info</button>
                </Link>
            </td>
        </tr>
    )
}

const Teacher = (props) => {
    console.log(props);
    const teacher = props.fetchTeacher(props.match.params.id);
    const students = props.fetchStudents();
    const studentsRelated = (students, teacher.id);
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2>Teacher Name: {teacher.first_name + " " + teacher.last_name}</h2>
                    </div>
                    <div className="col-md">

                        <p><span>Teacher ID: </span>{teacher.id}</p>
                        <p><span>Grade: </span>{teacher.grade}</p>
                        <p><span>Address: </span>{teacher.address}</p>
                        <p><span>Phone: </span>{teacher.phone_number}</p>



                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {makeStudentTable(studentsRelated)}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default Teacher;