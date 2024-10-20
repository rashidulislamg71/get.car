import styles from "./Investors.module.css";

import logo1 from "../../assets/images/Investors_logo/logo1.png";
import logo2 from "../../assets/images/Investors_logo/logo2.png";
import logo3 from "../../assets/images/Investors_logo/logo3.png";
import logo4 from "../../assets/images/Investors_logo/logo4.png";
import logo5 from "../../assets/images/Investors_logo/logo5.png";

const Investors = () => {
  return (
    <div className={`${styles.investors_contianer}`}>
      <div className={`${styles.investors_inner_content}`}>
        <h2>Our Trustworthy Partners</h2>
        <div className={`${styles.investors}`}>
          <div className={`${styles.single_investor}`}>
            <img src={logo1} alt="" />
          </div>
          <div className={`${styles.single_investor}`}>
            <img src={logo2} alt="" />
          </div>
          <div className={`${styles.single_investor}`}>
            <img src={logo3} alt="" />
          </div>
          <div className={`${styles.single_investor}`}>
            <img src={logo4} alt="" />
          </div>
          <div className={`${styles.single_investor}`}>
            <img src={logo5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
