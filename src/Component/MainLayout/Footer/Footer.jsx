import styles from "./Footer.module.css";

import logo from "../../../../public/get.car-logo.png";
import apple_store from "../../../assets/images/Footer_img/apple.png";
import Google_store from "../../../assets/images/Footer_img/Google.png";

import { HiChevronDoubleRight } from "react-icons/hi";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { FaTiktok, FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`${styles.footer_container}`}>
      <div className={`${styles.footer_inner_content}`}>
        <div className={`${styles.flex} ${styles.footer_top}`}>
          <div className={`${styles.column} ${styles.column_1}`}>
            <img src={logo} alt="" />
            <h2>Customer Support</h2>
            <ul>
              <li>
                <a href="tel:+1-44344332">+1-34398-29832</a>
              </li>
              <li>
                <a href="tel:+1-44344332">+1-34398-29832</a>
              </li>
              <li>
                <a href="mailto:example@mail.com">get.car@gmail.com</a>
              </li>
              <p>Saturday - Thursday (9:00 am - 10:00 pm)</p>
            </ul>
          </div>
          <div className={`${styles.column} ${styles.column_2}`}>
            <h2>Latest Cars</h2>
            <ul>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                <a href="">Dacia Sandero</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                <a href="">BMW X6</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                <a href="">Mercedes-Benz GLC</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                <a href="">Audi A5</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                <a href="">Rolls Royce</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                <a href="">Mercedes-Benz GLE</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.column} ${styles.column_3}`}>
            <h2>AutoBid</h2>
            <ul>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                  <a href="">About us</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                  <a href="">Blog</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                  <a href="">Shop</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                  <a href="">Wishlist</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                  <a href="">FAQ</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                  <a href="">Pricing</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.column} ${styles.column_4}`}>
            <h2>Useful Information</h2>
            <ul>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                <a href="">My account</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                <a href="">Dashboard</a>
              </li>
              <li>
                <span>
                  <HiChevronDoubleRight />
                </span>
                <a href="">Contact</a>
              </li>
              <div className={`${styles.flex} ${styles.social_contact}`}>
                <ul className={styles.flex}>
                  <li>
                    <a href="">
                      <FiFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FiLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FiYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FiTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FiInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTiktok />
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>

        <div className={`${styles.footer_bottom}`}>
          <h3>Download Mobile App</h3>
          <div className={`${styles.download_btn} ${styles.flex} ` }>
            <button>
              <a href="#">
                <img src={Google_store} alt="google store" />
              </a>
            </button>

            <button>
              <a href="#">
                <img src={apple_store} alt="google store" />
              </a>
            </button>
          </div>
          <p>&copy;All Right Reserved by Get.Car. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
