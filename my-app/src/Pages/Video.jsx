import React from 'react';
import Container from 'react-bootstrap/esm/Container';


function Video() {
  return (
    <Container>
      <div className='video-main'>
        <div className='video-para'>
          <p>Welcome to Schon Doorways - Where Precision Meets Sophistication</p>
        </div>

        {/* for video */}
        <div className='video-iframe' style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
          <iframe
            src="https://www.youtube.com/embed/6xWIRLubPGc?playlist=6xWIRLubPGc&loop=1&autoplay=0&mute=1&loop=1"
            title="Schon Doorways Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </div>
    </Container>
  );
}

export default Video;
