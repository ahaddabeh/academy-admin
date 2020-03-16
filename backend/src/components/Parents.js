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
        </Fragment>
    )
}

export default Parents;