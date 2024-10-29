/* eslint-disable no-undef */

import { useContext } from "react";
import styles from "./Search.module.css";
import { ProductContext } from "../GlobalContextAPI/GlobalContext";
import { BsSearch } from "react-icons/bs";

const Search = () => {
const {showSearchBar} = useContext(ProductContext);

  return (
    <>
      <div className={`${styles.searchBar_container} `}>
        <div
          className={`${styles.searchBar_inner_content} ${
            showSearchBar ? styles.searchBar_visible : ""
          }`}
        >
          <input className={`${styles.flex}`} type="search" placeholder="Search Food" />
          <button type="submit"><BsSearch /></button>
        </div>
      </div>
    </>
  );
};

export default Search;
