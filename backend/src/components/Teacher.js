import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeacher } from '../api'



const Teacher = (props) => {
    console.log(props);
    const teacher = props.fetchTeacher(props.match.params.id);
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2>Teacher Name: {teacher.first_name + " " + teacher.last_name}</h2>
                    </div>
                    <div className="col-md">

                        <p><span>Teacher ID: </span>{teacher.id}</p>
                        <p><span>Grade: </span>{teacher.grade}</p>
                        <p><span>Address: </span>{teacher.address}</p>
                        <p><span>Phone: </span>{teacher.phone_number}</p>



                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Teacher;