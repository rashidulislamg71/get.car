import React from "react";
import styles from "./HowItWork.module.css";

import { MdOutlineSwitchAccount } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import bid_img from "../../assets/images/how-it-work-img/bid-removebg-preview.png";

import top_arrow from "../../assets/images/how-it-work-img/how_work_arrow_top.png"
import down_arrow from "../../assets/images/how-it-work-img/how_work_arrow_down.png"

const HowItWork = () => {
  return (
    <div className={`${styles.how_it_work_design}`}>
      <div className={`${styles.how_it_work_container}`}>
        <div className={`${styles.how_it_work_inner_content} `}>
          <div className={styles.how_it_work_title}>
            <h4 data-aos="fade-down">Start Now</h4>
            <h2 data-aos="fade-up">How it Works</h2>
          </div>
          <div className={`${styles.flex} ${styles.how_it_works}`}>
            <div className={`${styles.flex} ${styles.single_how_it_work}`}>
              <div className={` ${styles.flex} ${styles.how_it_work_icon}`}>
                <span  data-aos="flip-left"><MdOutlineSwitchAccount /></span>
              </div>
              <div className={styles.how_it_work_text}>
                <h3>Registertion and Account</h3>
                <p>Search inventory of more than salvage used vehicles. Aliquam sagittis pellentesque turpis egestas tincidunt. Integer mollis leo lectus. .</p>
              </div>
            </div>
            <div className={`${styles.flex} ${styles.single_how_it_work}`}>
              <div className={` ${styles.flex} ${styles.car_icon} ${styles.how_it_work_icon}`}>
                <span data-aos="flip-down" ><IoCarSportOutline /> </span>
               
              </div>
              <div className={styles.how_it_work_text}>
                <h3>Browse and Select a Car</h3>
                <p>Search inventory of more than salvage used vehicles. Aliquam sagittis pellentesque turpis egestas tincidunt. Integer mollis leo lectus. .</p>
              </div>
            </div>
            <div className={`${styles.flex} ${styles.single_how_it_work}`}>
              <div className={` ${styles.flex} ${styles.how_it_work_icon}`}>
                <span data-aos="flip-right"><img src={bid_img} alt="" /></span>
              </div>
              <div className={styles.how_it_work_text}>
                <h3>Place Bids and Monitor</h3>
                <p>Search inventory of more than salvage used vehicles. Aliquam sagittis pellentesque turpis egestas tincidunt. Integer mollis leo lectus. .</p>
              </div>
            </div>
          </div>

          <div className={styles.top_arrow}>
          <img src={top_arrow} alt="" />
          </div>
          <div className={styles.down_arrow}>
          <img src={down_arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
