import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Spring } from 'react-burgers'

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      active: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({
      menuOpen: state.isOpen
    })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({
      menuOpen: false,
      active: !this.state.active
    })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
      active: !this.state.active
    })
  }

  render() {
    return (
      <div className="burger-container">
        <Spring
          onClick={() => this.toggleMenu()}
          active={this.state.active}
          width={20}
          lineHeight={2}
          lineSpacing={4}
          borderRadius={2}
          color="#94A0AF"
        />

        <Menu
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          customBurgerIcon={false}
          id={'sidebar'}
          className={'my-menu'}
          width={'100%'}
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="/">
            Settings
          </a>
        </Menu>
      </div>
    )
  }
}

export default BurgerMenu
