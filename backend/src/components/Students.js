import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const buildStudents = (students) => {
    return students.map((student) => (
        <tr key={`${student.id}_${student.first_name}`}>
            <td>{student.id}</td>
            <td>{student.last_name}</td>
            <td>{student.first_name}</td>
            <td>{student.grade}</td>
            <td>
                <Link to={`/student/${student.id}`}>
                    <button type="button" className="btn btn-info btn-sm">Info</button>
                </Link>
            </td>
        </tr>
    ))
}

const Students = (props) => {
    const students = props.fetchStudents();
    return (
        <Fragment>
            <div className="card">
                <div className="card-header main-color-bg">
                    <h4 className="card-title"><span>Students</span><Link to={'/student/1/edit'} className="btn btn-success btn-sm pull-right">+Student</Link></h4>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <tbody>
                            <tr>
                                <th>ID #</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Grade</th>
                                <th>Student Info</th>
                            </tr>
                            {buildStudents(students)}
                        </tbody>
                    </table>
                </div>
            </div>


        </Fragment>
    )
}

export default Students;