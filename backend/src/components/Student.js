import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Student = (props) => {
    console.log(props);
    const student = props.fetchStudent(props.match.params.id);
    return (
        <Fragment>
            <h1>Student</h1>
            <h3>{student.first_name}</h3>
        </Fragment>
    )
}

export default Student;