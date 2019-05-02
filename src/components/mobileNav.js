import React from 'react'

export default class MobileNav extends React.Component {
  render() {
    return (
      <div className={`mobile-nav ${this.props.className}`}>
        <div className="mobile-nav-content">
          <a
            onClick={this.props.handleToggleMenu}
            id="about"
            className="menu-item"
            href="/#about"
          >
            About
          </a>
          <a
            onClick={this.props.handleToggleMenu}
            id="about"
            className="menu-item"
            href="#interests"
          >
            Interests
          </a>
          <a
            onClick={this.props.handleToggleMenu}
            id="about"
            className="menu-item"
            href="#tech-stack"
          >
            Tech Stack
          </a>
          <a
            onClick={this.props.handleToggleMenu}
            id="about"
            className="menu-item"
            href="#work"
          >
            Work
          </a>
          <a
            onClick={this.props.handleToggleMenu}
            id="contact"
            className="menu-item"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    )
  }
}
