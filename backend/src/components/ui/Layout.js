import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
//Build a function to make the nav bar and loop through them


// Fonts
const buildNavItems = () => {
    return routes
        .filter(route => route.hasOwnProperty('navlabel'))
        .sort((a, b) => a.navorder > b.navorder ? 1 : -1)
        .map(route => {
            return (
                <li className="nav-item" key={route.navlabel}>
                    <NavLink className="nav-link" to={route.path}>
                        <span font-awesome="users"></span>
                        {route.navlabel}
                    </NavLink>
                </li>
            )
        })

}

const Nav = (props) => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Arqams Academy</a>

            <ul className="navbar-nav px-3">

                <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#">Sign out</a>
                </li>
            </ul>
        </nav>
    )
}

const SideBar = (props) => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            Dashboard <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    {buildNavItems()}
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Integrations
            </a>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                    </a>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Current month
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Last quarter
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Social engagement
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Year-end sale
            </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const Layout = (props) => {
    return (
        <Fragment>
            <Nav />
            <br />
            <br />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default Layout;

{/* 
   
 --> */}