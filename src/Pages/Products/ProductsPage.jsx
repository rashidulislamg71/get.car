import Cars from "../../Component/Cars/Cars";
import styles from "./Products.module.css";

const ProductsPage = () => {
    return (
        <div className={styles.produts_container}>
            <Cars />
        </div>
    );
};

export default ProductsPage;