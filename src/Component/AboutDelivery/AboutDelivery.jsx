import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineLocationCity } from "react-icons/md";
import { IoDocumentsSharp } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";

import styles from "./AboutDelivery.module.css";

const AboutDelivery = () => {
  return (
    <div className={styles.about_delivery_container}>
      <div className={`${styles.flex} ${styles.about_delivery_inner_content}`}>
        <div className={`${styles.flex} ${styles.single_about_delivery}`}>
          <div className={styles.icon}>
            <span>
              <TbTruckDelivery />
            </span>
          </div>
          <div className={styles.text}>
            <h3>Fast Delivery:</h3>
            <p>
              Same-day or next-day delivery to ensure customers get their
              vehicles on time.
            </p>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.single_about_delivery}`}>
          <div className={styles.icon}>
            <span>
              <MdOutlineLocationCity />
            </span>
          </div>
          <div className={styles.text}>
            <h3>Flexible Delivery:</h3>
            <p>
            Options for scheduled deliveries to match the customer’s convenience.
            </p>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.single_about_delivery}`}>
          <div className={styles.icon}>
            <span>
              <IoDocumentsSharp />
            </span>
          </div>
          <div className={styles.text}>
            <h3>Hassle-Free Document:</h3>
            <p>
            All required vehicle papers (insurance, registration) are verified before delivery.
            </p>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.single_about_delivery}`}>
          <div className={styles.icon}>
            <span>
              <MdOutlineSupportAgent />
            </span>
          </div>
          <div className={styles.text}>
            <h3> Customer Support:</h3>
            <p>
            Assist with delivery updates and address customer concerns in real time.
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AboutDelivery;
