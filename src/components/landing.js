import React from 'react'
import { Container, ButtonToolbar, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'gatsby'

export default class Landing extends React.Component {
  render() {
    return (
      <Container className="landing section-bg">
        <div className="hero">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOutUp"
            delay={800}
          >
            <h1 className="hero-name">Will Holsten</h1>
          </ScrollAnimation>

          <p className="logotype-w">
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOutUp"
              delay={400}
            >
              W
            </ScrollAnimation>
          </p>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeOutUp"
            delay={1200}
          >
            <p className="hero-description">
              Front end development,
              <br /> London
            </p>
            <ButtonToolbar className="justify-content-center">
              <Button href="#work" variant="primary">
                View Work
                <FontAwesomeIcon className="arrow-right" icon="arrow-right" />
              </Button>
              <Button variant="primary">
                CV
                <FontAwesomeIcon className="arrow-right" icon="arrow-right" />
              </Button>
            </ButtonToolbar>
          </ScrollAnimation>
        </div>
      </Container>
    )
  }
}
