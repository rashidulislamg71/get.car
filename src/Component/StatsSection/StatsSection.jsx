import React from "react";
import styles from "./StatsSection.module.css";

const StatsSection = () => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsInnerContent}>
        <div className={styles.statBox}>
          <h2 className={styles.statNumber}>40K</h2>
          <p className={styles.statLabel}>Registered Members</p>
        </div>
        <div className={styles.statBox}>
          <h2 className={styles.statNumber}>150M+</h2>
          <p className={styles.statLabel}>Inventory Sold</p>
        </div>
        <div className={styles.statBox}>
          <h2 className={styles.statNumber}>100%</h2>
          <p className={styles.statLabel}>Selling Price Received</p>
        </div>
        <div className={styles.statBox}>
          <h2 className={styles.statNumber}>6K+</h2>
          <p className={styles.statLabel}>Satisfied Customers</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
