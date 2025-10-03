import React from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'

import Arrow1 from "../assets/images/ar1.png"
import Arrow2 from "../assets/images/ar2.png"
function Journey() {
  return (
      <div className='journey-main'>
        <Container>
      <div className='journey-content'>
        <h2>Our Journey</h2>
        <p>From Vision to reality, our journey is built on design excellence, engineering precision, and enduring trust. Each milestone reflects our commitment to shaping better spaces—one project, one partnership, one breakthrough at a time.</p>
      </div>
    <Row>
        <Col  lg={3} md={6} sm={12}> 
        <div className='boxes-main'>
            <div className='boxes-year'>
                <h2>2013</h2>
            </div>
            <div className='year-image'>
                <img src={Arrow2} alt="" />
            </div>
            <div className='year-content'>
                <h5>Foundation Year</h5>
                <p>Schon Doorways was established with a vision to redefine aluminium systems in India through engineering excellence, quality, and innovation.</p>
            </div>
        </div>
           
             <div className='boxes-main'>
            <div className='boxes-year'>
                <h2>2021</h2>
            </div>
            <div className='year-image'>
                <img src={Arrow2} alt="" />
            </div>
            <div className='year-content'>
                <h5>Completed 1,00,000 Sq. Ft. of Installations</h5>
               <p>Delivered landmark projects in luxury homes, commercial buildings, and gated communities.</p>
            </div>
        </div>
        </Col>

  <Col  lg={3} md={6} sm={12}> 
         <div className='boxes-main-2'>
            <div className='year-content'>
                <h5>First 100 Projects Completed</h5>
                <p>Rapid growth in residential and commercial spaces, marking early success in premium door and window installations..</p>
            </div>
             <div className='year-image'>
                <img src={Arrow1} alt="" />
            </div>
            <div className='boxes-year'>
                <h2>2015</h2>
            </div>   
        </div>

         <div className='boxes-main'>
            <div className='year-content'>
                <h5>Honored with The Economic Times Achievers Award</h5>
                <p>Honored for contribution to innovation, customization, and material sustainability.</p>
            </div>
             <div className='year-image'>
                <img src={Arrow1} alt="" />
            </div>
            <div className='boxes-year'>
                <h2>2022</h2>
            </div>   
        </div>
        </Col>

        <Col  lg={3} md={6} sm={12}> 
           <div className='boxes-main'>
            <div className='boxes-year'>
                <h2>2016</h2>
            </div>
            <div className='year-image'>
                <img src={Arrow2} alt="" />
            </div>
            <div className='year-content'>
                <h5>Launched Dedicated Manufacturing Facility</h5>
                <p>Established a modern, in-house production unit to maintain quality control and accelerate custom fabrication..</p>
            </div>
        </div>

             <div className='boxes-main'>
            <div className='boxes-year'>
                <h2>2024</h2>
            </div>
            <div className='year-image'>
                <img src={Arrow2} alt="" />
            </div>
            <div className='year-content'>
                <h5>Upgraded to 80,000 Sq. Ft. Production Facility in Bangalore</h5>
               <p>Implemented automation, CNC precision, and smart QC systems to scale delivery.</p>
            </div>
        </div>
        </Col>

             <Col  lg={3} md={6} sm={12}> 
         <div className='boxes-main-2'>
            <div className='year-content'>
                <h5>Introduced Ultra-Slim & Smart Door Systems</h5>
                <p>Pioneered minimalist designs with advanced thermal break and automation technology in India.</p>
            </div>
             <div className='year-image'>
                <img src={Arrow1} alt="" />
            </div>
            <div className='boxes-year'>
                <h2>2019</h2>
            </div>   
        </div>

         <div className='boxes-main'>
            <div className='year-content'>
                <h5>Trusted by 5,000+ Architects | 2,50,000+ Homeowners</h5>
                <p>Today, Schon Doorways is a leading name in aluminium doors, windows, railings, partitions, and more....</p>
            </div>
             <div className='year-image'>
                <img src={Arrow1} alt="" />
            </div>
            <div className='boxes-year'>
                <h2>2025</h2>
            </div>   
        </div>
        </Col>
    </Row>

   </Container>
    </div>
  )
}

export default Journey