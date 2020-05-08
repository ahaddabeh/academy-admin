import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const makeStudentTable = (students) => {
    return students.map((student) =>
        <tr key={`${student.id}_${student.firstName}_${student.lastName}`}>
            <td>{student.lastName}</td>
            <td>{student.firstName}</td>
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
    const [teacher, setTeacher] = useState({});
    const [students, setStudents] = useState([]);
    const updateTeacher = async () => {
        const result = await props.fetchTeacher(props.match.params.id);
        const { Students, ..._teacher } = result.data;
        console.log(_teacher)
        setTeacher(_teacher)
        setStudents(Students)
        // const students = await props.fetchStudents();
        // setTeacher(teacher);
        // setStudents(students);
    }
    useEffect(() => {
        updateTeacher();
        // const studentsRelated = arrayOfStudents(students);
    }, [props.match.params.id]);
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2>Teacher Name: {teacher.firstName + " " + teacher.lastName}</h2>
                    </div>
                    <div className="col-md">

                        <p><span>Teacher ID: </span>{teacher.id}</p>
                        <p><span>Grade: </span>{teacher.grade}</p>
                        <p><span>Address: </span>{teacher.address}</p>
                        <p><span>Phone: </span>{teacher.phone}</p>



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
                            {makeStudentTable(students)}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default Teacher;