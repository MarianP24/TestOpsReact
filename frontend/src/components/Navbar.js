import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <li className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <Link to="#" className="text-white hover:text-gray-300">Options</Link>
                    <ul className={`absolute bg-white text-gray-800 pt-2 ${isOpen ? 'block' : 'hidden'}`}>
                        <li className="hover:bg-gray-200"><Link to="/fixture" className="block px-4 py-2">Fixture</Link></li>
                        <li className="hover:bg-gray-200"><Link to="/machine" className="block px-4 py-2">Machine</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
