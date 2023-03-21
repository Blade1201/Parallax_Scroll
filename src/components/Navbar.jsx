import React from 'react';
import "../styles/navbar.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="logo"> Logo </h2>
            <nav className="navigation">
                <a href="#" className="active"> Kezdőlap <span></span> </a>
                <a href="#"> Rólunk <span></span> </a>
                <a href="#"> Szolgáltatások <span></span> </a>
                <a href="#"> Elérhetőség <span></span> </a>
            </nav>
        </div>
    );
};

export default Navbar;