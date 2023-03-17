import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBook } from "../store/bookSlice";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import ShowStars from "../components/BookStars/ShowStars";
import { TbShoppingCartDiscount, TbZoomMoney } from "react-icons/tb";

const BookDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { book } = useSelector((state) => state.books);
  const image = require("../assets/imgs/book01.jpg");

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Row className="pb-5">
        <Col md={4} xs={12} className="text-center">
          <img src={image} alt="product" style={{ width: "78%" }} />
        </Col>
        <Col md={8} xs={12}>
          <div style={{ width: "70%" }} className="ms-5 mt-3">
            <div className="pb-4 border-bottom">
              <h2>{book.title}</h2>
              <p>
                by <span className="text-success">{book.publisher}</span>
              </p>
              <ShowStars item={book} />
            </div>
            <div className="pt-3 pb-4 border-bottom">
              <span className="fw-bold">Price :</span>
              <h3 className="mt-1">${book.price}</h3>
              <span style={{ fontSize: "14px" }}>
                + livraison à partir de 2.00 TND vers La Marsa
              </span>
              <div className="mt-2">
                <Button variant="success" style={{ width: "100%" }}>
                  ADD TO CART
                </Button>
              </div>
            </div>
            <div className="pt-2 pb-4">
              <div>
                <TbShoppingCartDiscount className="text-success me-2" />
                Delivery is free from 99 dinars of purchases on a selection of
                products
              </div>
              <div className="mt-2">
                <TbZoomMoney className="text-success me-2" />
                Jumia Pay: Pay securely by credit card
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Card>
        <Card.Header>Description</Card.Header>
        <Card.Body>
          <Card.Text>
            {book.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BookDetails;
