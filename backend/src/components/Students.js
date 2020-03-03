import React, { Fragment } from 'react';

const buildStudents = (students) => {
    return students.map((student) => <li key={student.first_name + " " + student.last_name}>{student.first_name}</li>)
}

const Students = (props) => {
    const students = props.fetchStudents();
    return (
        <Fragment>
            <h1>Students</h1>
            <ul>{buildStudents(students)}</ul>
        </Fragment>
    )
}

export default Students;