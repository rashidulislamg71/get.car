/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Hero.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import banner_2 from "../../assets/images/car_banner/banner-2.png";
import banner_3 from "../../assets/images/car_banner/banner-3.png";
import banner_4 from "../../assets/images/car_banner/banner-4.png";
import banner_5 from "../../assets/images/car_banner/banner-5.png";
import banner_6 from "../../assets/images/car_banner/banner-6.png";
import banner_7 from "../../assets/images/car_banner/banner-7.png";
import banner_8 from "../../assets/images/car_banner/banner-8.png";

const Hero = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
        <SwiperSlide>
        <div className={`${styles.hero_single_slider}`}>
          <div className={`${styles.slider_img}`}>
            <img src={banner_3} alt="Car 2" />
          </div>
          <div className={`${styles.hero_text}`}>
            <h2>Experience Luxury on Wheels</h2>
            <h1>Unleash the power of elegance with our premium cars.</h1>

            <div className={styles.flex}>
              <i>Staring Bid from</i>
              <h3>$2400.0</h3>
            </div>
            <div className={`${styles.hero_btns} ${styles.flex}`}>
              <button className={styles.explore_more_btn}>Explore More</button>
              <button className={styles.get_now_btn}>Get Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.hero_single_slider}`}>
          <div className={`${styles.slider_img}`}>
            <img src={banner_2} alt="Car 1" />
          </div>
          <div className={`${styles.hero_text}`}>
            <h2>Experience Luxury on Wheels</h2>
            <h1>Unleash the power of elegance with our premium cars.</h1>

            <div className={styles.flex}>
              <i>Staring Bid from</i>
              <h3>$2400.0</h3>
            </div>
            <div className={`${styles.hero_btns} ${styles.flex}`}>
              <button className={styles.explore_more_btn}>Explore More</button>
              <button className={styles.get_now_btn}>Get Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.hero_single_slider}`}>
          <div className={`${styles.slider_img}`}>
            <img src={banner_4} alt="Car 3" />
          </div>
          <div className={`${styles.hero_text}`}>
            <h2>Experience Luxury on Wheels</h2>
            <h1>Unleash the power of elegance with our premium cars.</h1>

            <div className={styles.flex}>
              <i>Staring Bid from</i>
              <h3>$2400.0</h3>
            </div>
            <div className={`${styles.hero_btns} ${styles.flex}`}>
              <button className={styles.explore_more_btn}>Explore More</button>
              <button className={styles.get_now_btn}>Get Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.hero_single_slider}`}>
          <div className={`${styles.slider_img}`}>
            <img src={banner_5} alt="Car 4" />
          </div>
          <div className={`${styles.hero_text}`}>
            <h2>Experience Luxury on Wheels</h2>
            <h1>Unleash the power of elegance with our premium cars.</h1>

            <div className={styles.flex}>
              <i>Staring Bid from</i>
              <h3>$2400.0</h3>
            </div>
            <div className={`${styles.hero_btns} ${styles.flex}`}>
              <button className={styles.explore_more_btn}>Explore More</button>
              <button className={styles.get_now_btn}>Get Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.hero_single_slider}`}>
          <div className={`${styles.slider_img}`}>
            <img src={banner_6} alt="Car 5" />
          </div>
          <div className={`${styles.hero_text}`}>
            <h2>Experience Luxury on Wheels</h2>
            <h1>Unleash the power of elegance with our premium cars.</h1>

            <div className={styles.flex}>
              <i>Staring Bid from</i>
              <h3>$2400.0</h3>
            </div>
            <div className={`${styles.hero_btns} ${styles.flex}`}>
              <button className={styles.explore_more_btn}>Explore More</button>
              <button className={styles.get_now_btn}>Get Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.hero_single_slider}`}>
          <div className={`${styles.slider_img}`}>
            <img src={banner_7} alt="Car 5" />
          </div>
          <div className={`${styles.hero_text}`}>
            <h2>Experience Luxury on Wheels</h2>
            <h1>Unleash the power of elegance with our premium cars.</h1>

            <div className={styles.flex}>
              <i>Staring Bid from</i>
              <h3>$2400.0</h3>
            </div>
            <div className={`${styles.hero_btns} ${styles.flex}`}>
              <button className={styles.explore_more_btn}>Explore More</button>
              <button className={styles.get_now_btn}>Get Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.hero_single_slider}`}>
          <div className={`${styles.slider_img}`}>
            <img src={banner_8} alt="Car 5" />
          </div>
          <div className={`${styles.hero_text}`}>
            <h2>Experience Luxury on Wheels</h2>
            <h1>Unleash the power of elegance with our premium cars.</h1>

            <div className={styles.flex}>
              <i>Staring Bid from</i>
              <h3>$2400.0</h3>
            </div>
            <div className={`${styles.hero_btns} ${styles.flex}`}>
              <button className={styles.explore_more_btn}>Explore More</button>
              <button className={styles.get_now_btn}>Get Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
