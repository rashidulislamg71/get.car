import { useContext } from "react";
import styles from "./Cart.module.css";
import { ProductContext } from "../GlobalContextAPI/GlobalContext";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  return (
    <div className={`${styles.cart_wrapper}`}>
      <div className={`${styles.cart_container}`}>
        <div className={`${styles.flex} ${styles.cart_inner_content}`}>
          <div className={`${styles.cart_items}`}></div>
          <div className={`${styles.cart_price_deatils}`}></div>
        </div>

        <div className={` ${styles.flex} ${styles.cart_adderss_and_payment}`}>
          <div className={`${styles.address}`}>
            <h2>Your Address</h2>
            <form className={` ${styles.flex} ${styles.address_form}`}>

              <div className={`${styles.flex} ${styles.address_row_1}`}>
                <div>
                  <label>Full Name</label> <br />
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    autoFocus
                  />
                  <br />
                  <label>Phone Number</label> <br />
                  <input type="text" placeholder="+880 170000043" required />
                </div>
                <div>
                  <label>Email Adderss</label> <br />
                  <input
                    type="text"
                    placeholder="example@gamail.com"
                    required
                  />
                  <br />
                  <label>Full Adderss</label> <br />
                  <input
                    type="text"
                    placeholder="Home No, Post, Upazila, District, Division, Country "
                    required
                  />
                  <br />
                </div>
              </div>
              <div className={styles.address_row_2}>
                <label>Massage</label> <br />
                <textarea rows="4" cols="20" placeholder="Say your opinion....."/>
              </div>
              <button>Submit</button>
            </form>
          </div>

          <div className={`${styles.payment_method}`}>
            <h2>Payment Now</h2>
            <div className={`${styles.payment_banks}`}>
                <a href=""><h4>Islami Bank</h4></a>
                <a href=""><h4>Sonali Bank</h4></a>
                <a href=""><h4>Janata Bank</h4></a>
                <a href=""><h4>HSBC Bank</h4></a>
                <input  type="checkbox" /> <span className={styles.cash_on_delevery}>Cash On Delevery</span>
                <br />
                <div className={`${styles.flex} ${styles.order_nowBtn}`}>

                <button>Order Now</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
