/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { MdOutlineMarkEmailRead, MdOutlinePhone } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import {
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialFacebook,
} from "react-icons/ti";

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
            <a className={styles.flex} href="tel:+4733378901">
              <span>
                <MdOutlinePhone />
              </span>
              <p> +47 333 78 901</p>
            </a>
          </p>
          <p className={`${styles.flex} ${styles.header_contact}`}>
            <a className={styles.flex} href="mailto:get.car@gmail.com">
              <span>
                <MdOutlineMarkEmailRead />
              </span>
              <p> get.car@gmail.com</p>
            </a>
          </p>
        </div>

        <div className={styles.social_icons}>
          <a href="#" title="Linkedin">
            {" "}
            <span className={styles.linkedin}>
              <TiSocialLinkedin />
            </span>
          </a>
          <a href="#" title="Twitter">
            <span className={styles.twitter}>
              <TiSocialTwitter />
            </span>
          </a>
          <a href="#" title="Facebook">
            <span className={styles.facebook}>
              <TiSocialFacebook />
            </span>
          </a>
        </div>

        <div
          className={`${styles.flex} ${styles.header_user_account_container}`}
        >
          <div
            className={`${styles.search_icon} ${
              showSearchBar ? styles.active_searchBar : ""
            }`}
          >
            <span title="Search" onClick={() => toggleSearchBar()}>
              {showSearchBar ? <FiXCircle /> : <FiSearch />}
            </span>
          </div>
          <div className={`${styles.flex} ${styles.header_user_account}`}>
            <NavLink to="/log-in">
              <span title="Profile">
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
