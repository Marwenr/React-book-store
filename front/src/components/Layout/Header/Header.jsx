import React, { useState } from "react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Form, Nav, NavDropdown } from "react-bootstrap";
import { HiGiftTop } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Modal from "../../Modal/Modal";
import SignIn from "../../Auth/SignIn";
import SignUp from "../../Auth/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../store/authSlice";

const Header = () => {
  const dispatch = useDispatch()
  const { isLogIn } = useSelector((state) => state.auth);

  const [show, setShow] = useState(false);
  const [signInUp, setSignInUp] = useState(false);
  const handleSignIn = () => {
    setShow(true);
    setSignInUp(true);
  };
  const handleSignUp = () => {
    setShow(true);
    setSignInUp(false);
  };

  const handleSignOut = () => {
    dispatch(logOut())
  }

  const { search } = styles;
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="d-flex flex-wrap mb-5"
      >
        <Container className="mb-3">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

          <Form className={`d-flex ${search}`}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <div className="d-flex align-items-center ">
            <NavDropdown title="MY ACCOUNT" id="basic-nav-dropdown">
              <div className="d-flex flex-column align-items-center mt-2">
                {isLogIn ? (
                  <div
                    className="btn btn-danger rounded-0 ps-5 pe-5"
                    onClick={handleSignOut}
                  >
                    LogOut
                  </div>
                ) : (
                  <>
                    <div
                      className="btn btn-success rounded-0 ps-5 pe-5"
                      onClick={handleSignIn}
                    >
                      Sign In
                    </div>
                    <div
                      className="p-0 mt-2 btn btn-link text-secondary"
                      style={{ fontSize: "12px" }}
                      onClick={handleSignUp}
                    >
                      Create An Account
                    </div>
                  </>
                )}
                <Modal show={show} close={() => setShow(false)}>
                  {signInUp ? (
                    <SignIn close={() => setShow(false)} />
                  ) : (
                    <SignUp close={() => setShow(false)} />
                  )}
                </Modal>
              </div>
            </NavDropdown>
            <div className="cart ms-3">
              <AiOutlineShoppingCart className="fs-2" />
            </div>
          </div>
        </Container>

        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="books">
                All Books
              </NavLink>
              <NavLink className="nav-link" to="books/special-offers">
                Special offers
              </NavLink>
              <NavLink className="nav-link" to="books/most-requested">
                Most Requested
              </NavLink>
              <NavLink className="nav-link" to="books/fiction">
                Fiction
              </NavLink>
              <NavLink className="nav-link" to="books/nonfiction">
                NonFiction
              </NavLink>
              <NavLink className="nav-link" to="books/kids">
                Kids
              </NavLink>
              <NavLink className="nav-link" to="books/games&puzzles">
                Games & Puzzles
              </NavLink>
              <NavLink className="nav-link" to="books/gift-cards">
                Gift Cards <HiGiftTop />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
