import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Sidebar, SortBar } from "../components/Layout";
import { fetchBooks } from "../store/bookSlice";

const BooksRoot = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);


  return (
    <Container>
      <Row>
        <Col md={3} xs={12}>
          <Sidebar />
        </Col>
        <Col md={9} xs={12}>
          <SortBar />
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default BooksRoot;
