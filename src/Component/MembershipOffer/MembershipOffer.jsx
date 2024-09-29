

import styles from "./MembershipOffer.module.css";

const MembershipOffer = () => {
    return (
        <section>
           <div className={`${styles.membershipOfferContainer}`}>
                <div className={`${styles.membershipOffer_content}`}>
                    <h1><span>Take 20%</span> Off</h1>
                    <h1>Your First Membership.</h1>
                    <p>This discount is vaild until December 2024. Terms and conditions apply.</p>
                    <button className={styles.take_memebershipBtn}>Take Membership</button>
                </div>

            </div> 
           <div className={styles.aa}></div>
        </section>
    );
};

export default MembershipOffer;