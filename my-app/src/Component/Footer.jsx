import React from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer-main'>
  <Container>
  <Row>
    <Col>
    <div className='footer-schon'>
        <img src="src\assets\images\logo.png" alt="" />
    </div>
    <div className='footer-para-1'>
        <p>India’s trusted name in premium aluminium doors and windows, blending world-class German engineering with refined Indian craftsmanship.</p>
    </div>
     <div className="icons-footer">
      <FaFacebook style={{ color: "#d9dde3", fontSize: "20px", margin: "0 10px" }} />
      <FaInstagram style={{ color: "#fafafa", fontSize: "20px", margin: "0 10px" }} />
      <FaGithub style={{ color: "#ffffff", fontSize: "20px", margin: "0 10px" }} />
      <FaLinkedin style={{ color: "#ffffff", fontSize: "20px", margin: "0 10px" }} />
    </div>
    </Col>
 
    <Col>
          <div className='footer-existence'>
        <h2>Our Existence</h2>
        <h4>contact@theschon.com</h4>
        <h6>+91 9535359481</h6>
            <h5>+91 7019209490</h5>
     </div>
    </Col>
    <Col>
    <div className='Quick-Links-3'>
        <h2>Quick Links</h2>
        <ul>
            <li>Our Blogs</li>
            <li>About us</li>
            <li>News</li>
            <li>Contact Us</li>
        </ul>
    </div>
    </Col>

       <Col>
    <div className='product'>
        <h2>Products</h2>
        <ul>
            <li>Doors</li>
            <li>Windows</li>
            <li>Railings</li> 
             <li>Glasses</li>
             <li>Cubicles</li>
        </ul>
    </div>
    </Col>
  </Row>
    <div className="footer-bottom">
    <p> All rights reserved.</p>
  </div>
  </Container>
  </div>
  )
}

export default Footer