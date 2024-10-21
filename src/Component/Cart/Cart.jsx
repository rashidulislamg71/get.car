import { useContext } from "react";
import styles from "./Cart.module.css";
import { ProductContext } from "../GlobalContextAPI/GlobalContext";

import empty_cart_img from "../../assets/images/cart_img/empty_cart.png";

import { TiDeleteOutline } from "react-icons/ti";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, deletCartSingleItemHandler } = useContext(ProductContext);

  return (
    <div className={`${styles.cart_wrapper}`}>
      <div className={`${styles.cart_container}`}>
        {cart && cart.length > 0 ? (
          <>
            <div className={`${styles.cart_inner_content}`}>
              <h1 className={styles.cart_main_title}>Your Cars</h1>
              <div
                className={`${styles.flex} ${styles.cart_items_and_order_summary}`}
              >
                <div className={`${styles.cart_items}`}>
                  {cart.map((car, index) => {
                    return (
                      <div
                        key={index}
                        className={` ${styles.flex} ${styles.single_cart_item}`}
                      >
                        <div
                          className={`${styles.flex} ${styles.single_cart_content}`}
                        >
                          <img src={car.img[0]} alt={car.name} />
                          <div>
                            <b>Band:</b>
                            <span>{car.band}</span>
                            <br />
                            <b>Model:</b>
                            <span>{car.name}</span>
                            <br />
                            <b>Color:</b>
                            <span>Blue</span>

                            <div className={`${styles.delete_cart}`}>
                              <button
                                onClick={() =>
                                  deletCartSingleItemHandler(index)
                                }
                              >
                                <TiDeleteOutline />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.quntity}`}>
                          <div
                            className={`${styles.flex} ${styles.quntity_btn}`}
                          >
                            <button className={styles.incrementBtn}>
                              <CiSquarePlus />
                            </button>
                            <p>1</p>
                            <button className={styles.decrementBtn}>
                              <CiSquareMinus />
                            </button>
                          </div>
                        </div>
                        <div className={`${styles.flex} ${styles.price}`}>
                          <p>
                            <span>$</span>
                            {car.price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={`${styles.order_summary_container}`}>
                  <h2>Order Summary</h2>
                  <div className={` ${styles.flex} ${styles.summary_deatils}`}>
                    <div className={`${styles.summary_deatils_titles}`}>
                      <p>CAR ITEMS</p>
                      <p>PRICE</p>
                      <p>DELIVERY CHARGE</p>
                      <p>TOTAL COST</p>
                    </div>
                    <div className={`${styles.summary_deatils_data}`}>
                      <p>1</p>
                      <p>
                        <span>$ </span>-230329.00
                      </p>
                      <p>
                        <span>$ </span>-00.00
                      </p>
                      <p>
                        <span>$ </span>-230329.00
                      </p>
                    </div>
                  </div>
                  {/* <button>Order Now</button> */}
                </div>
              </div>

              <div className={styles.border}>
                Buy any car and get a surprise gift.
              </div>

              <div
                className={` ${styles.flex} ${styles.cart_adderss_and_payment}`}
              >
                <div className={`${styles.address}`}>
                  <h2>Your Address</h2>
                  <form className={` ${styles.flex} ${styles.address_form}`}>
                    <div className={`${styles.flex} ${styles.address_row_1}`}>
                      <div>
                        <label>Full Name</label> <br />
                        <input type="text" placeholder="Full Name" required />
                        <br />
                        <label>Phone Number</label> <br />
                        <input
                          type="text"
                          placeholder="+880 170000043"
                          required
                        />
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
                      <textarea
                        rows="4"
                        cols="20"
                        placeholder="Say your opinion....."
                      />
                    </div>
                    {/* <button>Submit</button> */}
                  </form>
                </div>

                <div className={`${styles.payment_method}`}>
                  <h2>Payment Now</h2>
                  <div className={`${styles.payment_banks}`}>
                    <a href="">
                      <h4>Islami Bank</h4>
                    </a>
                    <a href="">
                      <h4>Sonali Bank</h4>
                    </a>
                    <a href="">
                      <h4>Janata Bank</h4>
                    </a>
                    <a href="">
                      <h4>HSBC Bank</h4>
                    </a>
                    <a href="">
                      <h4>Citibank Bank</h4>
                    </a>
                    <input type="checkbox" />{" "}
                    <span className={styles.cash_on_delevery}>
                      Cash On Delevery
                    </span>
                  </div>
                </div>
              </div>

              <div className={`${styles.flex} ${styles.confirm_order_btn}`}>
                <button>Confirm Order</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.flex} ${styles.emty_cart_container}`}>
              <img src={empty_cart_img} alt="" />
              <h1>Your Cart is Empty!</h1>
              <p>Looks like you haven't made order yet.</p>
              <NavLink to="/cars">
                <button>Continue to Shopping</button>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
