import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const buildParents = (parents) => {
    return parents.map((parent) => (
        <tr key={`${parent.id}_${parent.first_name}`}>
            <td>{parent.id}</td>
            <td>{parent.last_name}</td>
            <td>{parent.first_name}</td>
            <td>
                <Link to={`/parent/${parent.id}`}>
                    <button type="button" className="btn btn-info btn-sm">Info</button>
                </Link>
            </td>
        </tr>
    ))
}

const Parents = (props) => {
    const parents = props.fetchParents();
    return (
        <Fragment>
            <div className="card">
                <div className="card-header main-color-bg">
                    <h4 className="card-title"><span>Parents</span><Link to={'/parent/0/edit'} className="btn btn-success btn-sm pull-right">+Parent</Link></h4>
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
        </Fragment>
    )
}

export default Parents;