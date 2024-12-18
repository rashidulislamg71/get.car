
import { Link } from "react-router-dom";

import styles from "./Login_SignUp.module.css";

const Login = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.banner}>
        <h2>
          "Take the first step today by registering and unlock your potential
          for a brighter future!"
        </h2>
      </div>
      <div className={styles.login_box}>
        <div data-aos="flip-up" className={styles.login_inner_content}>
          <div>
            <h2>Welcome back</h2>
            <small>Login to the Dashboard</small>
            <p>
              Free Registration a New Account <Link to="/sign-up"> <button>SignUp</button></Link>
            </p>
          </div>
          <form className={styles.form}>
            <label>Email Address</label>
            <input type="email" placeholder="Email Address" required />
            <label>Password</label>
            <input type="password" placeholder="Password" required />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
