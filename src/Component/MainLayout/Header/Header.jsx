import React from "react";
import { FiSearch } from "react-icons/fi";
import {
  MdAccessTime,
  MdOutlineMarkEmailRead,
  MdOutlinePhone,
} from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import OfferMarquee from "../../OfferMarquee/OfferMarquee";
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

        <OfferMarquee />

        <div className={`${styles.search_icon}`}></div>
          <span><FiSearch /></span>
        <div
          className={`${styles.flex} ${styles.header_user_account_container}`}
        >
          <div className={`${styles.flex} ${styles.header_user_account}`}>
            <NavLink to="/log-in">
              <span>
                {" "}
                <FaUserTie />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
