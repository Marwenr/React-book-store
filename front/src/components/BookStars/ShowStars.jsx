import { FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";
import styles from "./styles.module.css";

const ShowStars = ({item}) => {

  const { iconStyle, icon, customerReviews } = styles;

  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {item.rating >= index + 1 ? (
          <FaStar className={icon}/>
        ) : item.rating >= number ? (
          <FaStarHalfAlt className={icon}/>
        ) : (
          <FaRegStar className={icon}/>
        )}
      </span>
    );
  });

  return (
    <div className={iconStyle}>
      {ratingStar}
      <p className={customerReviews}>({item.sales})</p>
    </div>
  );
};

export default ShowStars;
