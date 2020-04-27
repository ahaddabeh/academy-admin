import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { fetchParent, fetchStudents } from '../api'





const Parent = (props) => {
    console.log(props);
    const parent = props.fetchParent(props.match.params.id);

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2>Parent Name: {parent.first_name + " " + parent.last_name}</h2>
                    </div>
                    <div className="col-md">

                        <p><span>Parent ID: </span>{parent.id}</p>
                        <p><span>Gender: </span>{parent.gender}</p>
                        <p><span>Address: </span>{parent.address}</p>
                        <p><span>Email: </span>{parent.email}</p>
                        <p><span>Phone: </span>{parent.phone_number}</p>

                    </div>
                </div>
                <div>



                </div>
            </div>
        </Fragment>
    )
}

export default Parent;