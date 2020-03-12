import React, { Fragment } from 'react';

const buildTeachers = (teachers) => {
    return teachers.map((teacher) => <li key={teacher.first_name + " " + teacher.last_name}>{teacher.first_name}</li>)
}

const Teachers = (props) => {
    const teachers = props.fetchTeachers();
    return (
        <Fragment>
            <h1>Teachers</h1>
            <ul>{buildTeachers(teachers)}</ul>
        </Fragment>
    )
}

export default Teachers;