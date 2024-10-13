import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand ms-1 ms-lg-5">{props.title}</span>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{props.firstNavbarItem}</a>              
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.secondNavbarItem}</a>              
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.thirdNavbarItem}</a>              
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.fourthNavbarItem}</a>              
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string,
    firstNavbarItem: PropTypes.string,
    secondNavbarItem: PropTypes.string,
    thirdNavbarItem: PropTypes.string,
    fourthNavbarItem: PropTypes.string
};

export default Navbar;
