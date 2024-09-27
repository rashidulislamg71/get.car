import React from 'react';

import { NavLink } from 'react-router-dom';
import { PiShoppingCartThin } from "react-icons/pi";

import Logo from "../../../../public/get.car-logo.png"


const NavBar = () => {
    return (
        <header>
            <div>
                <NavLink to= "/"><img src={Logo} alt="Get.Car" /></NavLink>
            </div>
            
            <nav>
                <ul className="flex bg-blue-500 text-white text-center p-4">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cars">Cars</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/support">Support</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart"><PiShoppingCartThin /> <span>0</span></NavLink>
                    </li>
                   
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;