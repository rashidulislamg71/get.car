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

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={` ${styles.header_styles}`}>
      <div className={`${styles.flex} ${styles.header_container}`}>
        <div className={`${styles.flex} ${styles.header_contact_container}`}>
          <p className={`${styles.flex} ${styles.header_contact}`}>
            <span>
              <MdOutlinePhone />
            </span>
            <a href="tel:+4733378901">+47 333 78 901</a>
          </p>
          <p className={`${styles.flex} ${styles.header_contact}`}>
      
            <span>
              <MdOutlineMarkEmailRead />
            </span>
            <a href="mailto:get.car@gmail.com">get.car@gmail.com </a>
          </p>
        </div>

        <div className={`${styles.flex} ${styles.header_search}`}>
          <input id={styles.search} type="search" placeholder="Search More Cars" />{" "}
          <span>
            <FiSearch />
          </span>
        </div>

        <div
          className={`${styles.flex} ${styles.header_languag_account_container}`}
        >
          <div className={`${styles.flex} ${styles.select_language}`}>
            <span>
              <CiFlag1 />
            </span>
            <p>EN</p>
            <span className={styles.lang_arrow}>
              <IoIosArrowDown />
            </span>
          </div>

          <div className={`${styles.flex} ${styles.header_account}`}>
            <ul className={`${styles.flex}`}>
              <li>
                <NavLink to="/log-in">Log In</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
