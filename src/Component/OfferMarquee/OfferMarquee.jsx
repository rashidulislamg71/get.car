import styles from "./OfferMarquee.module.css";

const OfferMarquee = () => {
  return (
    <div className={styles.marquee_container}>
      <div className={styles.marquee_inner_content}>
        <span>
        Get <b>25% OFF</b> every car - no worry, no hassle, drive with an
        </span>
        open mind!
      </div>
    </div>
  );
};

export default OfferMarquee;
