import React from "react";
import styles from "./styles.module.css";

const Grid = ({ children, item }) => {
  const { grid } = styles
  const fetchData = item.map((el) =>
    React.cloneElement(children, { key: el.id, ...el })
  );
  return <div className={grid}>{fetchData}</div>;
};

export default Grid;
