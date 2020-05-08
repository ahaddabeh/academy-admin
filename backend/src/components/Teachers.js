import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './ui/Pagination';
const buildTeachers = (teachers) => {
    return teachers.map((teacher) => (
        <tr key={`${teacher.id}_${teacher.firstName}`}>
            <td>{teacher.id}</td>
            <td>{teacher.lastName}</td>
            <td>{teacher.firstName}</td>
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

    const [teachers, setTeachers] = useState([]);
    const [recordCount, setRecordCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const updateTeachers = async () => {
        const searchString = new URLSearchParams(props.history.location.search);
        const _currentPage = searchString.get("page") || 1;
        const results = await props.fetchTeachers({ page: _currentPage });
        setTeachers(results.data.rows);
        setRecordCount(results.data.count);
        setCurrentPage(_currentPage);
    }
    useEffect(() => {
        updateTeachers();
    }, [props.history.location.search])

    return (
        <Fragment>

            <div className="card">
                <div className="card-header main-color-bg">
                    <h4 className="card-title"><span>Teachers</span><Link to={'/teacher/0/edit'} className="btn btn-success btn-sm pull-right">+Teacher</Link></h4>
                </div>
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
            </div>
            <Pagination type="teachers" total={recordCount} currentPage={currentPage} />
        </Fragment>
    )
}

export default Teachers;