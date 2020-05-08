import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from "./ui/Pagination";

const buildStudents = (students) => {
    return students.map((student) => (
        <tr key={`${student.id}_${student.firstName}`}>
            <td>{student.id}</td>
            <td>{student.lastName}</td>
            <td>{student.firstName}</td>
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
    console.log(props);
    const [students, setStudents] = useState([]);
    const [recordCount, setRecordCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const updateStudents = async () => {
        console.log("This is location search", props.history.location.search);
        const searchString = new URLSearchParams(props.history.location.search);
        const _currentPage = searchString.get("page") || 1;
        const results = await props.fetchStudents({ page: _currentPage });
        setStudents(results.data.rows);
        setRecordCount(results.data.count);
        setCurrentPage(_currentPage);
    }
    useEffect(() => {
        updateStudents();
    }, [props.history.location.search])
    return (
        <Fragment>
            <div className="card">
                <div className="card-header main-color-bg">
                    <h4 className="card-title"><span>Students</span></h4>
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

            <Pagination type="students" total={recordCount} currentPage={currentPage} />
        </Fragment>
    )
}

export default Students;