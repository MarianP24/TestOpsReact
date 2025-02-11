import React from 'react';
import { Link } from 'react-router-dom';  // Use Link for navigation in React
import './Navbar.css';  // Import CSS file for styles

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ICT Manager</Link>  {/* React Link */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/index">Home</Link>  {/* React Link */}
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                Options
                            </button>
                            <ul className="dropdown-menu bg-dark">
                                <li><Link className="dropdown-item" to="/fixtures/listEndpointsController">FixtureController</Link></li>  {/* React Link */}
                                <li><Link className="dropdown-item" to="/machines/listEndpointsMachine">MachineController</Link></li>  {/* React Link */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;