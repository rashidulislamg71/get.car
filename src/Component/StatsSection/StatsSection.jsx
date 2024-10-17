// import React from "react";
// import styles from "./StatsSection.module.css";

// const StatsSection = () => {
//   return (
//     <div className={styles.statsContainer}>
//       <div className={styles.statsInnerContent}>
//         <div className={styles.statBox}>
//           <h2 className={styles.statNumber}>40K</h2>
//           <p className={styles.statLabel}>Registered Members</p>
//         </div>
//         <div className={styles.statBox}>
//           <h2 className={styles.statNumber}>150M+</h2>
//           <p className={styles.statLabel}>Inventory Sold</p>
//         </div>
//         <div className={styles.statBox}>
//           <h2 className={styles.statNumber}>100%</h2>
//           <p className={styles.statLabel}>Selling Price Received</p>
//         </div>
//         <div className={styles.statBox}>
//           <h2 className={styles.statNumber}>6K+</h2>
//           <p className={styles.statLabel}>Satisfied Customers</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsSection;


import React from "react";
import styles from "./StatsSection.module.css";
import Counter from "../StatsCounter/Counter";

const StatsSection = () => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsInnerContent}>
        <div className={styles.statBox}>
          <h2 className={styles.statNumber}>
            <Counter end={4000000} duration={1} />
          </h2>
          <p className={styles.statLabel}>Registered Members</p>
        </div>

        <div className={styles.statBox}>
          <h2 className={styles.statNumber}>
            <Counter end={15000} duration={2} /> {/* 15K */}
          </h2>
          <p className={styles.statLabel}>Inventory</p>
        </div>

        <div className={styles.statBox}>
          <h2 className={styles.statNumber}>
            <Counter end={1000} duration={3} /> {/* 1K */}
          </h2>
          <p className={styles.statLabel}>Selling Price Received</p>
        </div>

        <div className={styles.statBox}>
          <h2 className={styles.statNumber}>
            <Counter end={600000} duration={2} /> {/* 6K */}
          </h2>
          <p className={styles.statLabel}>Satisfied Customers</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
