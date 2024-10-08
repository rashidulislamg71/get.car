import React, { useState } from "react";
import styles from "./Support.module.css";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.page_container}>
      <div className={styles.banner}>
        <h1>Contact Us</h1>
        <p>We are here to help. Reach out to us anytime!</p>
      </div>

      <div className={styles.support_container}>
        <div className={styles.support_form_container}>
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form_group}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name.."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number..."
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="The message subject..."
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={` ${styles.massage} ${styles.form_group}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
                <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
            </div>

          
          </form>
        </div>

        <div className={styles.contact_info_container}>
          <h2>Contact Information</h2>
          <div
            className={`${styles.flex} ${styles.contact_info_inner_content}`}
          >
            <div
              className={`${styles.info_email} ${styles.single_contact_info}`}
            >
              <h3>
                <strong>Email Address</strong>
              </h3>
              <a href="mailto: officeget.car@gamil.com">get.car@gamil.com</a>
              <a href="mailto: officeget.car@gamil.com">
                officeget.car@gamil.com
              </a>
            </div>

            <div
              className={`${styles.info_headquarter} ${styles.single_contact_info}`}
            >
              <h3>
                <strong>Headquarters</strong>
              </h3>
              <p>
                211 Ullamcorper St, Roseville,
                <br /> New York, United States, 26483
              </p>
            </div>

            <div
              className={`${styles.info_phone} ${styles.single_contact_info}`}
            >
              <h3>
                <strong>Phone Number</strong>
              </h3>
              <p>
                Headquarters:{" "}
                <a href="tel: +20 000 000 000"> +20 000 000 000</a>
              </p>
              <p>
                {" "}
                Sales: <a href="tel: +20 000 000 000"> +20 000 000 000</a>
              </p>
            </div>

            <div
              className={`${styles.info_working_hours} ${styles.single_contact_info}`}
            >
              <h3>
                <strong>Working Hours</strong>
              </h3>
              <p> Monday – Friday: 8AM to 8PM</p>
              <p>Friday – Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
