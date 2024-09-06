import React from "react";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    checkAge: false,
  });

  const handleSubmit = (event) => {
    // event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    navigate("/upload");
    signup();
  };

  async function signup() {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json)",
      },
    });
    result = await result.json();
    console.log("result", result);
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <Container className="justify-center d-grid h-100">
      <Form
        id="sign-in-form"
        validated={validated}
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="monster-can-img mb-4"
            src="./src/assets/monster-img.png"
            alt="Can of a monster drink"
          />
        </div>
        <Form.Group>
          <Form.Group>
            <FloatingLabel
              label="Full Name"
              className="mb-3 input"
              controlId="validationCustom01"
            >
              <Form.Control
                className="input"
                required
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <Form.Control.Feedback type="invalid">
              Please Input your Name!
            </Form.Control.Feedback>
            <FloatingLabel
              label="Mobile Number"
              className="mb-3"
              controlId="validationCustom02"
            >
              <Form.Control
                className="input"
                required
                type="text"
                placeholder="Mobile Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Control.Feedback type="invalid">
            Please Input your Mobile Number!
          </Form.Control.Feedback>
        </Form.Group>

        <div id="label-color" className="mb-3">
          <Form.Check
            required
            label=" I'm 18 years old & above"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            name="checkAge"
            value={formData.checkAge}
            onChange={handleChange}
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-primary w-100 py-2" type="submit">
            {" "}
            Enter Site
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
