import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
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

const buildSideBarItems = () => {
    return routes
        .filter(route => route.hasOwnProperty('navlabel'))
        .sort((a, b) => a.navorder > b.navorder ? 1 : -1)
        .map(route => {
            return (
                <Link to={route.path} key={route.navlabel} className="list-group-item"><span className="fa fa-list-alt" aria-hidden="true"></span> {route.navlabel} <span className="badge badge-secondary float-right">12</span></Link>
            )
        })

}



const Sidebar = (props) => {
    return (
        <div>
            <h6 className="list-group-item active main-color-bg">
                <span className="fa fa-cog" aria-hidden="true"></span> Dashboard</h6>

            {buildSideBarItems()}
        </div>
    )

}

const Nav = (props) => {
    return (

        <nav className="navbar navbar-expand-lg main-bg">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">School Admin</a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active"><a className="nav-link" href="#">Dashboard</a></li>
                        {buildNavItems()}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item"><a className="nav-link" href="#">Welcome, Admin</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}




const Layout = (props) => {
    return (
        <Fragment>
            <Nav />
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <h1><span aria-hidden="true"></span>Arqams Academy</h1>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <Link to={'/student/0/register'} className="btn btn-outline-success" type="button">
                                    Register Student
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="list-group">

                                <Sidebar />

                            </div>


                        </div>

                        <div className="col-md-9">



                            {props.children}
                        </div>
                    </div>
                </div>




            </section>
            <footer id="footer">
                <p>Copyright AdminStrap, &copy; 2017</p>
            </footer>
        </Fragment>
    )
}

export default Layout;



