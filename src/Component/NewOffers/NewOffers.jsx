import React from "react";

import styles from "./NewOffers.module.css";

import offer_car from "../../assets/images/offer-img/Offer_img.png";

const NewOffers = () => {
  return (
    <div className={`${styles.homeNewOffers_design}`}>
      <div className={`${styles.homeNewOffers_container}`}>
        <div className={`${styles.flex} ${styles.homeNewOffers_inner_content}`}>
            <div className={`${styles.homeNewOffers_text}`}>
                <h4 data-aos="fade-down">New Offers</h4>
                <h1>Exciting & Exclusive Auction Lot – Cars Ready for Bidding!</h1>
                <p>Get ready to bid for the car of your dreams and experience the thrill of owning
                a masterpiece on wheels! Find out bellow how to bid.</p>
                <ul>
                    <li><b>Year:</b> 2023</li>
                    <li><b>Make:</b> Mercedes-Benz</li>
                    <li><b>Model:</b> G AMG</li>
                    <li><b>Mileage:</b> 15,000 miles</li>
                    <li><b>Color:</b> Midnight Black</li>
                    <li><b>Condition:</b> Midnight Black</li>
                    <li><b>Engine:</b>3.0L V6 Twin Turbo</li>
                    <li><b>Transmissin:</b>8-Speed Automatic</li>
                </ul>

                <div className={`${styles.flex} ${styles.offerBtns}`}>
                    <button data-aos="fade-up" className={` ${styles.offer_submit_btn} ${styles.offer_btn}`}>Submit Entry</button>
                    <button data-aos="fade-up" className={`${styles.offer_view_slot_btn} ${styles.offer_btn}`}>View Slot</button>
                </div>
            </div>
            <div className={`${styles.homeNewOffers_img}`} data-aos="fade-left">
                <img  src={offer_car} alt="Car" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewOffers;
