import React from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import {Form, Button } from "react-bootstrap";
import Logo from "../assets/images/logo.png"

function ContactForm() {
  return (
   <div className='contact-main'>
    <Container>
        <Row>
            <Col lg={6} md={6} sm={12}>
            <div className='contact-logo-left'>
                <div className='contact-logo'>
                      <img src={Logo} alt="Schon Logo" />
                </div>
                <div className='contact-heading'>
                    <h2>Ready to Start Your Next Project With Schon?</h2>
                </div>
            </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
             <div className='form-right'>
              <div className='right-content'>
                <h4>We're just a step away!</h4>
             </div>
        <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Full Name*"
            className="transparent-input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email Address*"
            className="transparent-input"
          />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formcontact">
          <Form.Control
            type="email"
            placeholder="Contact*"
            className="transparent-input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message..."
            className="transparent-input"
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="light" type="submit" className="form-btn">
            Get in Touch ➔
          </Button>
        </div>
      </Form>
      </div>
            </Col>
        </Row>
    </Container>

   </div>
  )
}

export default ContactForm