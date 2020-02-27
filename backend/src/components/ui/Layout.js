import React from 'react';
import { NavLink } from 'react-router-dom';

//Build a function to make the nav bar and loop through them

const Layout = (props) => {
    return (
        <div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/students'>Students</NavLink></li>

            </ul>
            {props.children}
        </div>
    )
}

export default Layout;