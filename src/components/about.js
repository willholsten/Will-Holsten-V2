import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Profile from './image'

class About extends React.Component {
  render() {
    return (
      <div className="section-container white-bg">
        <Container>
          <h3 className="section-header">A little about me</h3>
          <Row className="about-content">
            <Col md={6}>
              <p>Hey, I'm Will, a front end developer based in London, UK.</p>
              <p>
                Originally from Australia, I graduated from The University of
                Adelaide with a Bachelor of Design Studies. Since then I have
                grown a huge interest in UX design and front end development.
                Having now worked in both of these fields for a number of years,
                I have extensive experience working in multi-functional, agile
                team environments with a primary focus on eCommerce solutions.
              </p>
              <p>
                Besides my interests in technology and the web I also enjoy
                watching football, generally being active and following various
                dog breeds on Instagram.
              </p>
            </Col>

            <Col md={4} className="ml-auto">
              <Profile className="profile" />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About
