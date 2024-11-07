import styles from "./News.module.css";
import { IoIosPricetags } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

import newsAutoTechnology from "../../assets/images/News_img/autoTechnology/EV_Charging_Innovations.jpeg";
import { useContext } from "react";
import { ProductContext } from "../GlobalContextAPI/GlobalContext";

const NewsPage = () => {
  const { newsCategories } = useContext(ProductContext);
  console.log(newsCategories.autoTechnology);

  return (
    <>
      <div className={styles.news_container}>
        <div className={`${styles.flex} ${styles.news_inner_content}`}>
          <div className={styles.news_search_and_categories}>
            <div className={styles.search}>
              <h1>Search you News-</h1>
              <input type="search" />
              <button className={styles.news_search_btn} type="submit">
                Search
              </button>
            </div>
            <div className={`${styles.flex} ${styles.categories}`}>
              <h1>News Categories</h1>
              <a href="#">
                <b>Auto Technology</b>
              </a>
              <a href="#">
                <b>Car Reviews</b>
              </a>
              <a href="#">
                <b>Car Reviews</b>
              </a>
              <a href="#">
                <b>Car Reviews</b>
              </a>
            </div>
          </div>
          <div className={styles.news}>
            {newsCategories.autoTechnology.map((value, index) => {
              return (
                <div key={index} className={`${styles.single_news}`}>
                  <div className={styles.news_img}>
                    <img src={value.img} />
                  </div>
                  <div className={` ${styles.news_details}`}>
                    <div className={styles.news_title}>
                      <h2>{value.title}</h2>
                      <h3>{value.shortDetails}</h3>
                    </div>
                    <div
                      className={`${styles.flex} ${styles.news_writter_and_date}`}
                    >
                      <div className={`${styles.flex} $`}>
                        <span>
                          <FaUserEdit />
                        </span>
                        <small> RASHED</small>
                      </div>
                      <div className={`${styles.flex}`}>
                        <span>
                          <IoIosPricetags />
                        </span>
                        <small>Auto Technology</small>
                      </div>
                      <div className={`${styles.flex}`}>
                        <span>
                          <MdDateRange />
                        </span>
                        <small>{value.date}</small>
                      </div>
                    </div>

                    <div className={styles.main_news}>
                      <p>{value.fullDetails}</p>
                    </div>

                    <div className={styles.news_read_more_btn}>
                      <button>Read More...</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
