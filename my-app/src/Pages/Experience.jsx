import React from 'react'
import { Container } from "react-bootstrap";  
import { Row, Col } from "react-bootstrap";
import Bangalore from "../assets/images/Bangalore.svg"
import Hyderabad from "../assets/images/Hyderabad.svg"
import Chennai from "../assets/images/Chennai.svg"


function Experience() {
  return (
   <div className='Experience-main'>
     <div className='our-experience'>
        <h2>Our Experience Centres</h2>
     </div>
     <Container>
        <Row>
           <Col lg={4} md={6} sm={6}>
            <div className='exp-main'>
               <div className='experience-img'>
               <img src={Bangalore} alt="Bangalore" />
               </div>
               <div className='exp-content'>
               <h5>Bangalore</h5>
               </div>
               </div>
            </Col>

             <Col lg={4} md={6} sm={12}>
            <div className='exp-main'>
               <div className='experience-img second-change'>
                    <img src={Hyderabad} alt="Hyderabad" />
               </div>
               <div className='exp-content'>
               <h5>Hyderabad</h5>
               </div>
               </div>
            </Col>

              <Col lg={4} md={12} sm={12}>
            <div className='exp-main'>
               <div className='experience-img third-change'>
                  <img src={Chennai} alt="Chennai" />
               </div>
               <div className='exp-content'>
               <h5>Chennai</h5>
               </div>
               </div>
            </Col>
        </Row>
     </Container>

   </div>
  )
}

export default Experience