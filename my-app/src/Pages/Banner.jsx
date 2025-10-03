import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

function Banner() {
  return (
    <div className="Banner-main">
      <div className="Banner-bg"></div> 
      <Container className="Banner-content">
        <div className="Banner-about">
          <h2 className="fade-in">About Us</h2>
          <p className="fade-in delay-1">
            Crafting Excellence with Every Frame, Backed by a Legacy of Trust.
          </p>
          <Button className="Banner-btn fade-in delay-2">
            Get Free Consultation ➔
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
