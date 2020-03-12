import React, { Fragment } from 'react';

const buildParents = (parents) => {
    return parents.map((parent) => <li key={parent.first_name + " " + parent.last_name}>{parent.first_name}</li>)
}

const Parents = (props) => {
    const Parents = props.fetchParents();
    return (
        <Fragment>
            <h1>Parents</h1>
            <ul>{buildParents(Parents)}</ul>
        </Fragment>
    )
}

export default Parents;