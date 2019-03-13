import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import MobileNav from './mobileNav'
import { Spring } from 'react-burgers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.handleToggleMenu = this.handleToggleMenu.bind(this)

    this.state = {
      menuOpen: false,
      active: false,
      isHidden: true
    }
  }

  handleToggleMenu() {
    this.setState({
      isHidden: !this.state.isHidden,
      active: !this.state.active
    })
  }

  render() {
    return (
      <nav>
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
          </Container>
          <div className="burger-container">
            <Spring
              onClick={() => this.handleToggleMenu()}
              active={this.state.active}
              width={20}
              lineHeight={2}
              lineSpacing={4}
              borderRadius={2}
              color="#94A0AF"
            />
          </div>
        </Navbar>
        <MobileNav
          className={!this.state.isHidden ? '' : 'hidden'}
          handleToggleMenu={this.handleToggleMenu}
        />
      </nav>
    )
  }
}
