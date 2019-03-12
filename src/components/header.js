import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import BurgerMenu from './BurgerMenu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Header extends React.Component {
  render() {
    return (
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">W</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#interests">Interests</Nav.Link>
              <Nav.Link href="#tech-stack">Tech Stack</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.linkedin.com/in/willholsten/"
                className="navbar-icon"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://github.com/willholsten"
                className="navbar-icon"
              >
                <FontAwesomeIcon icon={['fab', 'github']} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <BurgerMenu />
        </Container>
      </Navbar>
    )
  }
}
