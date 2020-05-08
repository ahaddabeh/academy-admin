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


const Parent = (props) => {
    console.log(props);
    const [parent, setParent] = useState({});
    const [students, setStudents] = useState([]);
    const updateParent = async () => {
        const result = await props.fetchParent(props.match.params.id)
        setParent(result.data);
        setStudents(result.data.Students);

    }
    useEffect(() => {
        updateParent();
    }, [props.match.params.id]);

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2>Parent Name: {parent.firstName + " " + parent.lastName}</h2>
                    </div>
                    <div className="col-md">

                        <p><span>Parent ID: </span>{parent.id}</p>
                        <p><span>Gender: </span>{parent.gender}</p>
                        <p><span>Address: </span>{parent.address}</p>
                        <p><span>Email: </span>{parent.email}</p>
                        <p><span>Phone: </span>{parent.phone}</p>

                    </div>
                </div>
                <div className="row">
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
            </div>
        </Fragment>
    )
}

export default Parent;