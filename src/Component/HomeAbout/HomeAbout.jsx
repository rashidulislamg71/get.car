import React from "react";

import styles from "./HomeAbout.module.css";
import homeAbout from "../../assets/images/HomeAboutImg/homeAboutImg.png";
import Signature from "../../assets/images/HomeAboutImg/Signature.png";

const HomeAbout = () => {
  return (
    <div className={`${styles.homeAbout}`}>
      <div className={`${styles.homeAbout_container}`}>
        <div className={`${styles.flex} ${styles.homeAbout_inner_content}`}>
          <div className={`${styles.homeAbout_img}`}>
            <img data-aos="zoom-in-down" src={homeAbout} alt="Car" />
          </div>
          <div className={`${styles.homeAbout_text}`}>
            <h4 data-aos="fade-down">About Us</h4>
            <h2>Revving the Future: Your Ultimate Car Marketplace</h2>
            <p>
              At Autobid, we transform the way you buy cars by combining
              cutting-edge technology with the thrill of a live marketplace. Our
              intuitive platform lets you explore an extensive inventory of
              premium vehicles, ranging from sleek sedans to rugged trucks and
              everything in between.
            </p>
            <ul>
              <li>
                <b>Diverse Inventory:</b> Discover a vast selection of vehicles,
                all carefully inspected for quality.
              </li>
              <li>
                <b> Live Bidding Experience:</b> Engage in the excitement of
                real-time auctions, right from the comfort of your home.
              </li>
              <li>
                <b>Complete Transparency:</b> We provide detailed, honest
                information about every vehicle, so you can make an informed
                decision.
              </li>
              <li>
                <b>Seamless User Experience:</b> Easily navigate through our
                website with an intuitive interface designed for smooth
                browsing.
              </li>
              <li>
                <b>Secure Transactions:</b> Buy with peace of mind, knowing that
                your personal and financial data are fully protected.
              </li>
            </ul>
            <div data-aos="fade-left">
              <img src={Signature} alt="Signature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
