import React from 'react';
import './Navbar.css'; // Ensure to create this CSS file

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Cat Shelter</h1>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
