import React from "react";
import SearchItem from "./SearchItem";
import styles from "./styles.module.css";
import { searchItems } from "../../../data/data";

const Sidebar = () => {
  const { sideBar } = styles;

  return (
    <div className={sideBar}>
        <SearchItem item={searchItems.categories} searchItem={"Categories"} type={"radio"} />
        <SearchItem item={searchItems.ages} searchItem={"Ages"} type={"radio"} />
        <SearchItem item={searchItems.prices} searchItem={"Prices"} type={"radio"} />
        <SearchItem item={searchItems.language} searchItem={"Language"} type={"radio"} />
    </div>
  );
};

export default Sidebar;
