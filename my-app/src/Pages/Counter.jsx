import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

function Counter() {
  // 👇 initialize intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2     // start when 20% visible
  })

  return (
    <div className='Counter-main'>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className='left-content'>
              <h5>
                India’s trusted name in premium aluminium doors and windows,
                blending world-class German engineering with refined Indian craftsmanship.
              </h5>
              <p>
                At Schon Doorways, we’re redefining how India experiences doors,
                windows, and architectural aluminium systems. Founded in 2013,
                our journey began with a simple yet ambitious goal — to blend
                German engineering excellence with Indian innovation. Today,
                we are trusted by 5,000+ architects and 250,000+ homeowners
                across 200+ cities. From ultra-slim aluminium doors and windows
                to custom railings, partitions, and shower cubicles, we offer
                end-to-end solutions that combine style, strength, and sustainability.
                With a strong belief in precision, customization, and partnership,
                Schon is not just a product brand — it’s a space-making partner
                for every visionary design.
              </p>
            </div>
          </Col>

          <Col lg={6} md={12} sm={12}>
            {/* attach ref here 👇 */}
            <div className="right-count" ref={ref}>

              <div className="counter col_fourth col_fourth-1">
                <h2>{inView && <CountUp end={250} duration={3} />}+</h2>
                <div className="inner-content"><p>Cities</p></div>
              </div>

              <div className="counter col_fourth col_fourth-1">
                <h2>{inView && <CountUp end={4} duration={3} />}</h2>
                <div className="inner-content"><p>Mn Sq.Ft of Doors & Windows</p></div>
              </div>

              <div className="counter col_fourth col_fourth-1">
                <h2>{inView && <CountUp end={1500} duration={3} />}+</h2>
                <div className="inner-content"><p>Projects</p></div>
              </div>

              <div className="counter col_fourth col_fourth-1">
                <h2>{inView && <CountUp end={200} duration={3} />}+</h2>
                <div className="inner-content"><p>Experts</p></div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Counter
