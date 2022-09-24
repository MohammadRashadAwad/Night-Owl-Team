import React, { Fragment, useState,useEffect } from "react";
import "./Contact.css";
import "../../asset/css/Bootstrap.min.css";
import { Col, Container, Form ,Row} from "react-bootstrap";
import p from '../../asset/image/contact.jpg'

const Contact = () => {
 
 const[values,setValues]=useState('');
 const[formError,setFormError]=useState({});
 const[isSubmit,setIsSubmit]=useState(false);

 const valueHandle=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
     setValues({...values,[name]:value})
   }


  const SendMassageHandel = (e) => {
    e.preventDefault();
   setFormError(validate(values))
   setIsSubmit(true);
  };
 useEffect(()=>{
    if(Object.keys(formError).length == 0 && isSubmit){
    }
 },[formError])
  const validate=(val)=>{
   const errors={};
   const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if(!val.name){
    errors.name="Name is required !";

   }
   if(!val.email){
    errors.email="Email is required !";
    
   }
   else if(!regex.test(val.email)){
    errors.email="This is not valid Email ";

   }
  
   return errors;
  }

  return (
    <Fragment>
     <Container className="mt-5">
        <Row className="g-3">
            <Col lg={5} md={6} sm={12} >
            <h2 className='contactTitle'>Contact</h2>
      <Form className="formContact">
        <Form.Group className="mb-3">
          <Form.Label className="formTitle">Name</Form.Label>
          <Form.Control
            className="inputForm"
            type="text"
            placeholder="Your Name"
            name='name'
            onChange={valueHandle}
          />
          <Form.Label className="messageError">{formError.name}</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formTitle">Email address</Form.Label>
          <Form.Control
            className="inputForm"
            type="email"
            placeholder="name@example.com"
            
            name='email'
            onChange={valueHandle}
          />
                    <Form.Label className="messageError">{formError.email}</Form.Label>

        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="formTitle">Message</Form.Label>
          <Form.Control
            className="inputForm"
            as="textarea"
            rows={3}
            
            name='message'
            onChange={valueHandle}
          />

        </Form.Group>
        <button className="btnaa" onClick={SendMassageHandel} type='submit'>
          Submit
        </button>
      </Form>
            </Col>

            <Col lg={7} md={6} sm={12}>
            <img src={p} className='contactImg'/>
            </Col>
        </Row>
     </Container>
    </Fragment>
  );
};

export default Contact;
