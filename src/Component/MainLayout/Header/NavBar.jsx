import React, { useContext, useRef, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";

import Logo from "../../../../public/get.car-logo.png";
import styles from "./NavBar.module.css";

// react icons
import { IoMdMenu } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { ProductContext } from "../../GlobalContextAPI/GlobalContext";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navRef = useRef(null);

  const openMenuHandeling = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenuHandeling = () => {
    setOpenMenu(false);
  };

  const { countCartedItem, cart } = useContext(ProductContext);

  return (
    <header>
      <div
        className={`${styles.flex} ${styles.navbar_container} `}
      >
        <div className={`${styles.logo}`}>
          <NavLink to="/" onClick={closeMenuHandeling}>
            <img src={Logo} alt="Get.Car" />
          </NavLink>
        </div>

        <nav className={`${styles.flex} ${styles.menu}`}>
          <ul
            ref={navRef}
            className={`${styles.flex} ${styles.menu_link} ${
              openMenu ? styles.navResposive : " "
            }`}
          >
            <li>
              <NavLink
                onClick={closeMenuHandeling}
                className={`${({ isActiv }) =>
                  isActiv ? styles.active : " "}`}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenuHandeling}
                className={`${({ isActiv }) =>
                  isActiv ? styles.active : " "}`}
                to="/cars"
              >
                Cars
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenuHandeling}
                className={`${({ isActiv }) =>
                  isActiv ? styles.active : " "}`}
                to="/news"
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenuHandeling}
                className={`${({ isActiv }) =>
                  isActiv ? styles.active : " "}`}
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenuHandeling}
                className={`${({ isActiv }) =>
                  isActiv ? styles.active : " "}`}
                to="/support"
              >
                Support
              </NavLink>
            </li>
          </ul>

          <div
            onClick={closeMenuHandeling}
            className={`${styles.cart_buy} ${styles.flex}`}
          >
            <Link to="/cart" className={`${styles.cart} `}>
              <PiShoppingCartThin />{" "}
              <span> {cart.length ? countCartedItem() : 0} </span>
            </Link>
            <Link onClick={closeMenuHandeling}>
              <button className={styles.buyNowBtn}>Buy Now</button>
            </Link>
          </div>
        </nav>

        <div onClick={openMenuHandeling} className={styles.menu_btns}>
          {openMenu ? <VscChromeClose /> : <IoMdMenu />}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
