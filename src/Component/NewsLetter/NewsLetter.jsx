import styles from "./NewsLetter.module.css";

import newLetterImg from "../../assets/images/NewsLetter_img//NewLetter_img.png";

const NewsLetter = () => {
  return (
    <div className={`${styles.newLetter_container}`}>
      <div className={`${styles.newLetter_inner_content} ${styles.flex}`}>
        <div className={styles.newLetter_text_subscrib}>
          <h4>Right into Mailbox</h4>
          <h1>
            Get the news by subscribing to our <br /> newsletter. Tips directly!
          </h1>

          <div className={`${styles.flex} ${styles.input}`}>
            <input
              className={styles.input_email}
              type="email"
              placeholder="Enter you email."
            />
            <button>Submit</button>
          </div>
        </div>

        <div className={styles.newLetter_img}>
          <img src={newLetterImg} alt="car" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
