


import styles from "./CarDetails.module.css";
import carDetails_img from "../../assets/images/cart-car/BMW/M3/images.jpeg"

const CarDetails = () => {
    return (
        <div className={`${styles.carDetails_container}`}>
            <div className={`${styles.flex} ${styles.carDetails_inner_content} `}>
                <div className={`${styles.carDetails_img}`}>
                    <img src={carDetails_img} alt="Car" />
                </div>
                <div className={`${styles.carDetails_text}`}>

                </div>
            </div>
        </div>
    );
};

export default CarDetails;