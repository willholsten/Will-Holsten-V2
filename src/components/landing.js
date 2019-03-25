import React from 'react'
import { Container, ButtonToolbar, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WillHolstenCV from '../images/WillHolstenCV.pdf'

export default class Landing extends React.Component {
  render() {
    return (
      <Container className="landing green-bg">
        <div className="hero">
          <h1 className="hero-name">Will Holsten</h1>
          <p className="hero-description">
            Front end development,
            <br /> London
          </p>
          <ButtonToolbar className="justify-content-center">
            <Button href="#contact" variant="primary">
              Get in touch
              <FontAwesomeIcon className="arrow-right" icon="arrow-right" />
            </Button>
            <Button href={WillHolstenCV} target="_blank" variant="primary">
              <FontAwesomeIcon className="download" icon="download" />
              CV
            </Button>
          </ButtonToolbar>
          <p className="logotype-w">W</p>
        </div>
      </Container>
    )
  }
}
