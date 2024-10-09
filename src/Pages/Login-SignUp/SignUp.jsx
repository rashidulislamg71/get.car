

import styles from "./Login_SignUp.module.css";

const SignUp = () => {
    return (
        <div className={styles.login_container}>
      <div className={styles.banner}>
        <h2>
          "Take the first step today by registering and unlock your potential
          for a brighter future!"
        </h2>
      </div>
      <div className={styles.login_box}>
        <div data-aos="flip-up" className={` ${styles.signUp} ${styles.login_inner_content}`}>
          <div>
            <h2>Welcome to Registration </h2>
            <small>Registration to the Dashboard</small>
            <p>
              You have a Account <button>Login.</button>
            </p>
          </div>
          <form className={`${styles.signUp_form} ${styles.form}`}>
            <label>Full Name</label>
            <input type="text" placeholder="Full Name" required />
            <label>Phone</label>
            <input type="text" placeholder="Your Phone" required />
            <label>Email Address</label>
            <input type="email" placeholder="Email Address" required />
            <label>Password</label>
            <input type="password" placeholder="Password" required />
            <button>SignUp</button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;