import React from 'react'
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

function Banner() {
  return (
          <div className='Banner-main'>
            <Container>
        <div className='Banner-about'>
            <h2>About Us</h2>
            <p>Crafting Excellence with Every Frame, Backed by a Legacy of Trust.</p>
            <Button className="Banner-btn">Get Free Consultation ➔</Button>
        </div>
        </Container>
    </div>
  
  )
}

export default Banner