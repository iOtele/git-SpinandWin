import React from 'react'
import Container from "react-bootstrap/Container"
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

const Upload = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   
    file: null,
    store: "",
    select: ""
       
})

const handleFileChange = (e) => {
  setFormData({
    ...formData,
    file: e.target.file[0],
  });
};

   const handleSubmit = (event) => { 
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }
     setValidated(true);
     navigate("/spin")
  };

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }))
  }

  return (
    <Container className="justify-center d-grid h-100">
      <Form id='sign-in-form' validated={validated} method="POST" onSubmit={handleSubmit}>
      <div className='d-flex justify-content-center align-items-center'>
        <img className="monster-can-img mb-4" src="./src/assets/monster-img.png" alt="Can of a monster drink" />
        </div>
       
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" name='upload'
          value={formData.file} 
          onChange={handleFileChange}
          />

        </Form.Group>
        <FloatingLabel label="Name of Store"
            className="mb-3 input"
            controlId="validationCustom01">
           
          <Form.Control
          required
            className="input"
            type="text"
            placeholder="Name of Store"
            name="store"
            value={formData.store}
            onChange={handleChange}
          />
        </FloatingLabel>

        <Form.Select onChange={handleChange} aria-label="Default select example" className='mb-3'>
        <option>--Choose State--</option>
        <option value="1">Abia</option>
        <option value="2">Adamawa</option>
        <option value="3">Akwa Ibom</option>
        <option value="4">Anambra</option>
        <option value="5">Bauchi</option>
        <option value="6">Bayelsa</option>
        <option value="7">Benue</option>
        <option value="8">Borno</option>
        <option value="9">Cross River</option>
        <option value="10">Delta</option>
        <option value="11">Ebonyi</option>
        <option value="12">Edo</option>
        <option value="13">Ekiti</option>
        <option value="14">Enugu</option>
        <option value="15">FCT - Abuja</option>
        <option value="16">Gombe</option>
        <option value="17">Imo</option>
        <option value="18">Jigawa</option>
        <option value="19">Kaduna</option>
        <option value="20">Kano</option>
        <option value="21">Katsina</option>
        <option value="22">Kebbi</option>
        <option value="23">Kogi</option>
        <option value="24">Kwara</option>
        <option value="25">Lagos</option>
        <option value="26">Nasarawa</option>
        <option value="27">Niger</option>
        <option value="28">Ogun</option>
        <option value="29">Ondo</option>
        <option value="30">Osun</option>
        <option value="31">Oyo</option>
        <option value="32">Plateau</option>
        <option value="33">Rivers</option>
        <option value="34">Sokoto</option>
        <option value="35">Taraba</option>
        <option value="36">Yobe</option>
        <option value="37">Zamfara</option>

        </Form.Select>
        <div className='d-grid'>
          <button className='btn btn-primary w-100 py-2' type='submit'> Submit </button>
      </div>
      </Form>
    </Container>
  )
}

export default Upload