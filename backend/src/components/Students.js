import React, { Fragment } from 'react';

const buildStudents = (students) => {
    return students.map((student) => {
        <Fragment>
            <tr>
                <td key={student.last_name}>{student.last_name}</td>
                <td key={student.first_name}>{student.first_name}</td>
                <td key={student.grade}>{student.grade}</td>
                <td><a href="#"><button type="button"
                    className="btn btn-info btn-sm">Info</button></a></td>
                <td>
                    <button type="button" className="btn btn-primary btn-sm"><i
                        className="fa fa-edit"></i></button>
                </td>
            </tr>
        </Fragment>
    })
}

const Students = (props) => {
    const students = props.fetchStudents();
    return (
        <Fragment>
            <h1>Students</h1>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Grade</th>
                            <th>Student Info</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buildStudents(students)}

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default Students;