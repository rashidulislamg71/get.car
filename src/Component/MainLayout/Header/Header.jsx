/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMarkEmailRead, MdOutlinePhone } from "react-icons/md";

import { FaUserTie } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

import { NavLink } from "react-router-dom";

import OfferMarquee from "../../OfferMarquee/OfferMarquee";
import styles from "./Header.module.css";
import { ProductContext } from "../../GlobalContextAPI/GlobalContext";
import Search from "../../SearchBar/Search";

const Header = () => {
  const { showSearchBar, handleScroll, toggleSearchBar } =
    useContext(ProductContext);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showSearchBar]);

  return (
    <header className={` ${styles.header_styles} `}>
      <Search />
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
            <a href="mailto:get.car@gmail.com">get.car@gmail.com</a>
          </p>
        </div>

        <OfferMarquee />

        <div
          className={`${styles.search_icon} ${
            showSearchBar ? styles.active_searchBar : ""
          }`}
        >
          <span onClick={() => toggleSearchBar()}>
            {showSearchBar ? <FiXCircle /> : <FiSearch />}
          </span>
        </div>

        <div
          className={`${styles.flex} ${styles.header_user_account_container}`}
        >
          <div className={`${styles.flex} ${styles.header_user_account}`}>
            <NavLink to="/log-in">
              <span>
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
