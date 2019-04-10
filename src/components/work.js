import React from 'react'
import {
  Container,
  Row,
  Col,
  ButtonToolbar,
  Button,
  Modal
} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Assets
import idmobile from '../images/idmobile.png'
import idmobileModal from '../images/modals/idmobile-modal.png'
import stolberg from '../images/stolberg.png'
import stolbergModal from '../images/modals/stolberg-modal.png'
import royalDerbyHotel from '../images/royal-derby-hotel.png'
import royalDerbyHotelModal from '../images/modals/royal-derby-hotel-modal.png'
import jizz from '../images/jizz.png'
import jizzModal from '../images/modals/jizz-modal.png'
import surfdome from '../images/surfdome.png'
import surfdomeModal from '../images/modals/surfdome-modal.png'
import sfconfectionery from '../images/sfconfectionery.png'
import sfconfectioneryModal from '../images/modals/sfconfectionery-modal.png'

export default class Work extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      show: false,
      work: [
        {
          title: 'iD Mobile',
          image: idmobile,
          modal: 'idmobileModal',
          modalImage: idmobileModal,
          background: 'work-one-bg',
          summary:
            'iD Mobile is a mobile virtual network operator operating in the United Kingdom, using the Three network. It is owned by Dixons Carphone.',
          link: 'https://www.idmobile.co.uk',
          goal:
            'To upgrade the iD Mobile basket and checkout to align with other companies under the Dixons Carphone brand.',
          helped: [
            'Worked from UX designs to rebuild the front end checkout and mobile upgrade journeys.',
            'Built re-usable components using PHP Symfony framework.'
          ]
        },

        {
          title: 'Royal Derby Hotel',
          image: royalDerbyHotel,
          modal: 'royalDerbyModal',
          modalImage: royalDerbyHotelModal,
          background: 'work-two-bg',
          summary:
            'The Royal Derby is a bar and hotel in Fitzroy, Melbourne which is hugely popular with the sporting community.',
          link: 'https://www.idmobile.co.uk',
          goal:
            'To create a mobile first website with scalable component based code. it was a priority to make the food + drink menus and booking functionality as accessible as possible, as well as displaying the various events held by the hotel including a live sports schedule.',
          helped: [
            'Web design & development using the React framwork.',
            'Live sports guide via Game On Live Sports API.',
            'Domain and hosting management.',
            'Google Analytics integration.',
            'Email subscription and contact form management.'
          ]
        },
        {
          title: 'The Stolberg',
          image: stolberg,
          modal: 'stolbergModal',
          modalImage: stolbergModal,
          background: 'work-three-bg',
          summary:
            'The Stolberg is a bar in Preston, Melbourne that accomodates four stylish function rooms.',
          link: 'https://www.stolberg.com.au',
          goal:
            'To replace the outdated Wordpress website into something that shows off the four function rooms at The Stolberg. Customers needed to be able to easily navigate to the room packages and make enquiries.',
          helped: [
            'Web design & development',
            'Created booking services for the various event hire rooms.',
            'Domain and hosting management.',
            'Google Analytics integration.',
            'mail subscription and contact form management.'
          ]
        },
        {
          title: 'Surfdome',
          image: surfdome,
          modal: 'surfdomeModal',
          modalImage: surfdomeModal,
          background: 'work-four-bg',
          summary:
            'Surfdome is an online retailer specialising in surf, snow and skate apparel and hardware.',
          link: 'https://www.surfdome.com',
          goal:
            'I was employed as a UX designer / front end developer at Surfdome for two years, some of the contributions I made are listed below.',
          helped: [
            'Working with multiple teams including tech, design, UX and trading to manage the front end of the website across 2 companies and 7 domains.',
            'Designing and building HTML email newsletters to a target audience of over 1.2 million people.',
            'Lead UX designer for complete website design overhaul. Working with the UX manager and tech team to produce homepage, PLP, PDP and basket & checkout design improvements.',
            'Created A/B tests using Optimizely.'
          ]
        },
        {
          title: 'Jizz The Drinking Game',
          image: jizz,
          modal: 'jizzModal',
          modalImage: jizzModal,
          background: 'work-five-bg',
          summary:
            'The Jizz Drinking Game by Spencer & Fleetwood is a hilarious party game aimed at hen parties.',
          link: 'https://www.jizzthegame.com',
          goal:
            'To create a simple straightforward website to explain how to play the game and where to buy the product.',
          helped: ['Web design & development']
        },
        {
          title: 'S&F Confectionery',
          image: sfconfectionery,
          modal: 'sfconfectioneryModal',
          modalImage: sfconfectioneryModal,
          background: 'work-six-bg',
          summary:
            'S&F Confectionery is a B2B importer and distributer of mints.',
          link: 'https://www.sfconfectionery.com',
          goal:
            'To create a website that would be used as a catalog for other businesses to show product and packaging information.',
          helped: [
            'Web design & development.',
            'Domain and hosting management.',
            'Product photography.'
          ]
        }
      ]
    }

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow(id) {
    this.setState({ show: id })
  }

  render() {
    return (
      <div className="section-container section-bg work-container">
        <Container>
          <h3 className="section-header">Latest Work</h3>
        </Container>

        {this.state.work.map(property => (
          <Modal
            show={this.state.show === property.modal}
            onHide={this.handleClose}
            key={property.image}
          >
            <Modal.Header closeButton className="section-bg">
              <Modal.Title>{property.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="company-brief">
                <p>{property.summary}</p>
                <ButtonToolbar className="justify-content-center">
                  <Button
                    variant="primary"
                    href={property.link}
                    target="_blank"
                  >
                    Visit Site
                    <FontAwesomeIcon
                      className="arrow-right"
                      icon="arrow-right"
                    />
                  </Button>
                </ButtonToolbar>
                <img
                  src={property.modalImage}
                  alt={property.title}
                  className="modal-screenshot"
                />
              </div>
            </Modal.Body>
            <Modal.Footer className="section-bg company-work">
              <h3>The Goal</h3>
              <p>{property.goal}</p>
              <h3>How I Helped</h3>
              <ul>
                {property.helped.map(listItem => (
                  <li key={property.title}>{listItem}</li>
                ))}
              </ul>
            </Modal.Footer>
          </Modal>
        ))}
        <Row noGutters className="work-tiles">
          {this.state.work.map(property => (
            <Col
              xs={12}
              sm={6}
              md={4}
              className={property.background}
              key={property.title}
            >
              <ScrollAnimation
                className="header-animation"
                animateIn="fadeInUp"
                animateOut="fadeOut"
              >
                <figure onClick={() => this.handleShow(property.modal)}>
                  <img src={property.image} alt={property.title} />
                  <figcaption>
                    <div>
                      <h3>{property.title}</h3>
                    </div>
                  </figcaption>
                </figure>
              </ScrollAnimation>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
