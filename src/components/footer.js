import React from 'react'
import { Container } from 'react-bootstrap'
// import Atlassian from './../images/skills/atlassian.svg'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="section-container section-bg">
        <Container>
          <footer>
            <a href="/" className="footer-brand">
              W
            </a>
            <p>Front end development, London</p>© 2016 -{' '}
            {new Date().getFullYear()}. All Rights Reserved.
          </footer>
        </Container>
      </div>
    )
  }
}
