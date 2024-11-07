

import styles from "./NewsPage.module.css";

import News from "../../Component/News/News"

const NewsPage = () => {
    return (
        <div className={styles.newsPage}>
            <div className={styles.newsPageHeader}>
                 Know to Letest News 
            </div>
            <News />
        </div>
    );
};

export default NewsPage;