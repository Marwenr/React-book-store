import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ShowStars from "../BookStars/ShowStars";
import styles from "./styles.module.css";

const ItemDetails = (item) => {
  const { titleHover, card } = styles;
  const navigate = useNavigate();
  const image = require("../../assets/imgs/book01.jpg");

  return (
    <Card
      style={{ width: "200px", border: "none" }}
      onClick={() => navigate(`/${item.id}`)}
      className={card}
    >
      <Card.Img
        style={{ width: "100%" }}
        variant="top"
        src={image}
        alt="book"
      />
      <Card.Body className="p-1 d-flex align-items-center justify-content-center">
        <h6 className={titleHover}>{item.title}</h6>
        <ShowStars item={item} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetails;
