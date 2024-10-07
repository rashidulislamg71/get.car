import styles from "./TeamWork.module.css";

import CEO from "../../assets/images/About_us_img/CEO.jpeg";
import Developer from "../../assets/images/About_us_img/Developer.jpeg";
import adviser from "../../assets/images/About_us_img/adviser.jpeg";
import marketing_specialist from "../../assets/images/About_us_img/marketing_specialist.jpeg";
import sales_representative from "../../assets/images/About_us_img/sales_representative.jpeg";

const TeamWork = () => {
  return (
    <div className={`${styles.team_container}`}>
      <div className={styles.team_inner_content}>
      <h2 className={styles.title}>The Team Behind the Business</h2>
        <div className={`${styles.team_cards}`}>
            <div className={styles.single_card}>
                <img src={CEO} alt="CEO" />
                <h3>JONY KOBIR</h3>
                <p>CEO</p>
            </div>
            <div className={styles.single_card}>
                <img src={Developer} alt="Developer" />
                <h3>RASHED KHAN</h3>
                <p>Developer</p>
            </div>
            <div className={styles.single_card}>
                <img src={adviser} alt="adviser" />
                <h3>NOYON HOSEEN</h3>
                <p>Adviser</p>
            </div>
            <div className={styles.single_card}>
                <img src={sales_representative} alt="sales_representative" />
                <h3>MEJU AHAMMED</h3>
                <p>Sales Representative</p>
            </div>
            <div className={styles.single_card}>
                <img src={marketing_specialist} alt="marketing_specialist" />
                <h3>KAJOL AHAMMED</h3>
                <p>Marketin Specialist</p>
            </div>
        </div>
      
      </div>
       
    </div>
  );
};

export default TeamWork;
