import React from "react";
import { FiSearch } from "react-icons/fi";
import {
  MdAccessTime,
  MdOutlineMarkEmailRead,
  MdOutlinePhone,
} from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-5">
      <div className="flex gap-4 justify-center items-center">
        <p className="flex gap-1 justify-center items-center">
          {" "}
          <span>
            {" "}
            <MdOutlinePhone />
          </span>
          <a href="tel:+4733378901">+47 333 78 901</a>
        </p>
        <p className="flex gap-1 justify-center items-center">
          {" "}
          <span>
            <MdOutlineMarkEmailRead />
          </span>{" "}
          <a href="mailto:get.car@gmail.com">get.car@gmail.com </a>
        </p>
        <p className="flex gap-1 justify-center items-center">
          <span>
            <MdAccessTime />
          </span>{" "}
          Sun-Fri : 10:00 AM - 6:00 PM
        </p>
      </div>

      <div className="flex gap-1 justify-center items-center">
        <div className="flex">
          <input type="search" placeholder="Search More Cars" />{" "}
          <span>
            {" "}
            <FiSearch />
          </span>
          <p className="flex">
            <span>
              <CiFlag1 />
            </span>{" "}
            EN{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </p>
        </div>

        <div className="flex">
          <ul className="flex justify-center gap-4">
            <li>
              <NavLink to="/log-in">Log In</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
