import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SignIn = ({ close }) => {
  const [info, setInfo] = useState({
    id: Math.round(Math.random() * 100),
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleInput = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInfo((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInfo({
      id: "",
      name: "",
      email: "",
      number: 0,
      gender: "",
    });
    close();
  };

  return (
    <>
      <Form className="p-4" onSubmit={onSubmitHandler}>
        <h4>Sign in or Create an Account</h4>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Control id='email' type="email" name="email" placeholder="Email address" value={info.email} onChange={handleInput}/>
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
          <Form.Control id='password' type="password" name="password" placeholder="Password" value={info.password} onChange={handleInput}/>
        </Form.Group>

        <Button className="rounded-0 mt-4" variant="success" style={{ width: "100%"}} type="submit">
          Sign In
        </Button>

        <Button className="rounded-0 mt-4" variant="outline-success" style={{ width: "100%"}} type="submit">
          Create an Account
        </Button>
      </Form>
    </>
  );
};

export default SignIn;
