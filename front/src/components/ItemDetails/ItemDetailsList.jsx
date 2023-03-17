import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ShowStars from "../BookStars/ShowStars";

const ItemDetailsList = (item) => {

  const navigate = useNavigate()
  const image = require("../../assets/imgs/book01.jpg");

  return (
    <div className="d-flex mb-2 border" onClick={() => navigate(`/${item.id}`)}>
      <img src={image} alt="book" style={{ width: "100px" }} />
      <div className="ms-3">
        <h4>{item.title}</h4>
        <p className="p-0 m-0">by: <span className="text-primary">{item.publisher}</span></p>
        <p>Language : {item.language}</p>
        <ShowStars item={item} />
      </div>
    </div>
  );
};

export default ItemDetailsList;
