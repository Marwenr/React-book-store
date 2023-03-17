import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./styles.module.css";

const BookStars = ({item}) => {
  const { starsContent, starsItem } = styles;
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const colors = {
    grey: "#a9a9a9",
    orange: "#FFBA5A",
  };

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className={starsContent}>
          <FaStar
            className={starsItem}
            color={
              (currentValue || hoverValue) > item.rating
                ? colors.orange
                : colors.grey
            }
            onClick={() => handleClick(item.rating + 1)}
            onMouseOver={() => handleMouseOver(item.rating + 1)}
            onMouseLeave={handleMouseLeave}
          />
    </div>
  );
};

export default BookStars;
