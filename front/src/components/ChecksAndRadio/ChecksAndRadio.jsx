import React from "react";
import { Form } from "react-bootstrap";

const ChackBox = ({ name, type, handleSearch }) => {

  return (
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type={type} label={name} name={"searchBy"} id={name} value={name} onClick={(e) => handleSearch(e)} />
    </Form.Group>
  );
};

export default ChackBox;
