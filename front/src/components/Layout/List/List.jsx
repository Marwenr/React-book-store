import React from "react";

const List = ({ children, item }) => {
  const fetchData = item.map((el) =>
    React.cloneElement(children, { key: el.id, ...el })
  );
  return <div className={List}>{fetchData}</div>;
};

export default List;
