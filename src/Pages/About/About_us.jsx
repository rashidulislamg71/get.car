import styles from "./About_us.module.css";

import team_work from "../../assets/images/About_us_img/about_us_team_work.jpg";
import TeamWork from "../../Component/TeamWork/TeamWork";

import Investors from "../../Component/Invster/Investors";


const About_us = () => {
  return (
    <>
    <div className={`${styles.about_us_container}`}>
      <div className={styles.about_us_banner}>
        <h1>ABOUT US</h1>
        <h3>Discover the Freedom of the Open Read</h3>
      </div>
      <div className={` ${styles.flex} ${styles.about_us_inner_content}`}>
        <div className={`${styles.about_us_text}`}>
          <h1>Our Mission in the Company</h1>
          <p>
            Welcome to AutoBid, where passion meets possibility in every bid.
            Explore a world of curated auctions, where treasures await discovery
            and bidding is an art form. Unleash the thrill of winning as you
            navigate through our diverse marketplace of unique items. Join us on
            the journey where auctions become more than transactions – they
            become stories.
            <br />
            <br />
            Uncover rare finds, embrace the excitement of competitive bidding,
            and redefine your shopping experience. We curate a marketplace where
            enthusiasts, collectors, and seekers of extraordinary come together.
            Explore, engage, and embark on a journey of exclusive auctions that
            redefine the way you acquire and appreciate the extraordinary.
          </p>

          <div className={`${styles.flex} ${styles.stay_market}`}>
            <h1>24</h1>

            <div>
              <h3>Years on the Market</h3>
              <small>
                Our platform is a dynamic fusion of curated collections,
                spirited bidding, and unbeatable excitement.
              </small>
            </div>
          </div>
        </div>
        <div className={`${styles.about_us_img}`}>
          <img src={team_work} alt="" />
        </div>
      </div>
    </div>
        <TeamWork />
        <Investors />
    </>
  );
};

export default About_us;
