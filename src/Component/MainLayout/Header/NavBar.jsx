// import React from 'react';

// import { NavLink } from 'react-router-dom';
// import { PiShoppingCartThin } from "react-icons/pi";

// import Logo from "../../../../public/get.car-logo.png"


// const NavBar = () => {
//     return (
//         <header>
//             <div>
//                 <NavLink to= "/"><img src={Logo} alt="Get.Car" /></NavLink>
//             </div>
            
//             <nav>
//                 <ul className="flex bg-blue-500 text-white text-center p-4">
//                     <li>
//                         <NavLink to="/">Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/cars">Cars</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about">About Us</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/support">Support</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/cart"><PiShoppingCartThin /> <span>0</span></NavLink>
//                     </li>
                   
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default NavBar;



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PiShoppingCartThin } from "react-icons/pi";
import Logo from "../../../../public/get.car-logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <img src={Logo} alt="Get.Car" className="h-10" />
        </NavLink>

        {/* Hamburger menu icon for mobile view */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Menu Items */}
        <nav
          className={`lg:flex items-center space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}
        >
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <li>
              <NavLink to="/" className="hover:underline">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cars" className="hover:underline">Cars</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/support" className="hover:underline">Support</NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="flex items-center">
                <PiShoppingCartThin className="mr-1" />
                <span>0</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
