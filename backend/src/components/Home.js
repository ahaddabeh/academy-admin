import React, { Fragment } from 'react';
const arr = [
    <p key='123'>1. My name is Alaa</p>,
    <p key='124'>2. My name is Alaa</p>,
    <p key='125'>3. My name is Alaa</p>
];

const Home = () => {
    return (
        <Fragment>
            <h1>
                Home
            </h1>
            {arr}
        </Fragment>
    )
}

export default Home;