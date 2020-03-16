import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const buildTeachers = (teachers) => {
    return teachers.map((teacher) => (
        <tr key={`${teacher.id}_${teacher.first_name}`}>
            <td>{teacher.id}</td>
            <td>{teacher.last_name}</td>
            <td>{teacher.first_name}</td>
            <td>{teacher.grade}</td>
            <td>
                <Link to={`/teacher/${teacher.id}`}>
                    <button type="button" className="btn btn-info btn-sm">Info</button>
                </Link>
            </td>
        </tr>
    ))
}

const Teachers = (props) => {
    const teachers = props.fetchTeachers();
    return (
        <Fragment>
            <h1>Teachers</h1>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Grade</th>
                            <th>Teacher Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buildTeachers(teachers)}

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default Teachers;