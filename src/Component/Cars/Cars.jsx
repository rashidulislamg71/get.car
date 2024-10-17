/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../GlobalContextAPI/GlobalContext";
import { RiStarSFill } from "react-icons/ri";

import styles from "./Cars.module.css";

const Cars = () => {
  const {
    bmw,
    rolls_royce,
    toyota,
    selectedProduct,
    setSelectedProduct,
    cartCarHandler,
    productDeatilsHandler,
  } = useContext(ProductContext);

  const [showRolls, setShowRolls] = useState(false);
  const [showToyota, setShowToyota] = useState(false);

  useEffect(() => {
    setSelectedProduct(bmw);
  }, [setSelectedProduct]);

  const handleShowBMW = () => {
    setShowRolls(false);
    setShowToyota(false);
    setSelectedProduct(bmw);
  };

  const handleShowRollsRoyce = () => {
    if (showToyota == true) {
      setShowRolls(false);
    } else {
      setShowRolls(true);
    }
    setSelectedProduct(rolls_royce);
  };

  const handleShowToyota = () => {
    setShowToyota(true);
    setSelectedProduct(toyota);
  };

  return (
    <div className={styles.cars_container}>
      <div className={`${styles.flex} ${styles.title_btn}`}>
        <div className={styles.carsTitle}>
          <h1>Your Luxurious Cars</h1>
        </div>
        <div className={`${styles.flex} ${styles.carsBtn}`}>
          <button onClick={handleShowBMW}>BMW</button>
          <button onClick={handleShowRollsRoyce}>Rolls Royce</button>
          <button className={styles.toyota} onClick={handleShowToyota}>
            Toyota
          </button>
        </div>
      </div>

      <div className={`${styles.flex} ${styles.cars_content}`}>
        {selectedProduct.map((product) => (
          <li key={product.id}>
            <img src={product.img[0]} alt={product.name} />
            <div className={styles.cart_details}>
              <div>
<h2 className={styles.flex}>{product.name}</h2>
              <p className={`${styles.ratings}`}>
              <span>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </span>
              <b>{product.ratings}</b>
              </p>
              </div>
              
              <p className={styles.price}> ${product.price}</p>

              <div className={`${styles.flex} ${styles.cart_seeDetails_Btn}`}>
                <button
                  onClick={() => cartCarHandler(product)}
                  className={styles.addToCartBtn}
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => productDeatilsHandler(product)}
                  className={styles.seeDetails}
                >
                  Details
                </button>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Cars;
