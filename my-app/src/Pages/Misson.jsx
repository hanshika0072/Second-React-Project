import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

// Import images
import MissionIcon from "../assets/images/aboutpagebannericon2.png";
import VisionIcon from "../assets/images/aboutpagebannericon1.png";

function Mission() {
  return (
    <div className='Misson-main'>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}> 
            <div className='mission-box'>
              <div className='icon-mission'>
                <img src={MissionIcon} alt="Our Mission" />
              </div>
              <div className='our-mission'>
                <h2>Our Mission</h2>
                <p>
                  To empower architects, designers, and homeowners with
                  world-class aluminium doors, windows, and interior systems — crafted
                  with German precision, engineered for India, and delivered through
                  seamless end-to-end service.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={6} md={12} sm={12}> 
            <div className='mission-box'>
              <div className='icon-mission'>
                <img src={VisionIcon} alt="Our Vision" />
              </div>
              <div className='our-mission'>
                <h2>Our Vision</h2>
                <p>
                  To become India’s'most trusted name in architectural aluminium
                  systems by shaping future-ready spaces with innovation, integrity,
                  and design excellence—one doorway at a time.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Mission
