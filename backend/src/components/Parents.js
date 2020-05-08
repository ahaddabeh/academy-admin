import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './ui/Pagination'

const buildParents = (parents) => {
    return parents.map((parent) => (
        <tr key={`${parent.id}_${parent.firstName}`}>
            <td>{parent.id}</td>
            <td>{parent.lastName}</td>
            <td>{parent.firstName}</td>
            <td>
                <Link to={`/parent/${parent.id}`}>
                    <button type="button" className="btn btn-info btn-sm">Info</button>
                </Link>
            </td>
        </tr>
    ))
}

const Parents = (props) => {
    const [parents, setParents] = useState([]);
    const [recordCount, setRecordCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const updateParents = async () => {
        const searchString = new URLSearchParams(props.history.location.search);
        const _currentPage = searchString.get("page") || 1;
        const results = await props.fetchParents({ page: _currentPage });
        setParents(results.data.rows);
        setRecordCount(results.data.count);
        setCurrentPage(_currentPage);
    }
    useEffect(() => {
        updateParents();
    }, [props.history.location.search])
    return (
        <Fragment>
            <div className="card">
                <div className="card-header main-color-bg">
                    <h4 className="card-title"><span>Parents</span></h4>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Parent Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buildParents(parents)}

                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination type="parents" total={recordCount} currentPage={currentPage} />
        </Fragment>
    )
}

export default Parents;