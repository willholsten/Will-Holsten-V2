import React from 'react'
import {
  Container,
  Row,
  Col,
  ButtonToolbar,
  Button,
  Modal
} from 'react-bootstrap'
import idmobile from './../images/idmobile.png'
import idmobileModal from './../images/modals/idmobile-modal.svg'
import stolberg from './../images/stolberg.png'
import stolbergModal from './../images/modals/stolberg-modal.svg'
import royalDerbyHotel from './../images/royal-derby-hotel.png'
import royalDerbyHotelModal from './../images/modals/royal-derby-hotel-modal.svg'
import jizz from './../images/jizz.png'
import jizzModal from './../images/modals/jizz-modal.svg'
import surfdome from './../images/surfdome.png'
import surfdomeModal from './../images/modals/surfdome-modal.svg'
import sfconfectionery from './../images/sfconfectionery.png'
import sfconfectioneryModal from './../images/modals/sfconfectionery-modal.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Work extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: null
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow(id) {
    this.setState({ show: id })
  }

  render() {
    return (
      <div className="section-container green-bg work-container">
        <Container>
          <h3 className="section-header">Latest Work</h3>
        </Container>
        {/* iD Mobile Modal */}
        <Modal
          show={this.state.show === 'idmobileModal'}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton className="green-bg">
            <Modal.Title>iD Mobile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="company-brief">
              <p>
                iD Mobile is a mobile virtual network operator operating in the
                United Kingdom, using the Three network. It is owned by Dixons
                Carphone.
              </p>
              <ButtonToolbar className="justify-content-center">
                <Button variant="secondary" target="_blank">
                  Visit Site
                  <FontAwesomeIcon
                    className="chevron-right"
                    icon="chevron-right"
                  />
                </Button>
              </ButtonToolbar>
              <img
                src={idmobileModal}
                alt="iD Mobile"
                className="modal-screenshot"
              />
            </div>
          </Modal.Body>
          <Modal.Body className="green-bg company-work">
            <h3>The Goal</h3>
            <p>
              To upgrade the iD Mobile basket and checkout to align with other
              companies under the Dixons Carphone brand.
            </p>
            <h3>How I Helped</h3>
            <ul>
              <li>
                Worked from UX designs to rebuild the front end checkout and
                mobile upgrade journeys.
              </li>
              <li>Built re-usable components using PHP Symfony framework</li>
              <li>
                The development environment used a Docker container for ease of
                sharing the project.
              </li>
              <li>
                Advised on front end and UX best practises whilst having to come
                up with reactive solutions for changing requirements.
              </li>
            </ul>
          </Modal.Body>
        </Modal>
        {/* The Stolberg Modal */}
        <Modal
          show={this.state.show === 'stolbergModal'}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton className="green-bg">
            <Modal.Title>The Stolberg</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="company-brief">
              <p>
                The Stolberg is a bar in Preston, Melbourne that accomodates
                four stylish function rooms.
              </p>
              <ButtonToolbar className="justify-content-center">
                <Button variant="secondary" target="_blank">
                  Visit Site
                  <FontAwesomeIcon
                    className="chevron-right"
                    icon="chevron-right"
                  />
                </Button>
              </ButtonToolbar>
              <img
                src={stolbergModal}
                alt="iD Mobile"
                className="modal-screenshot"
              />
            </div>
          </Modal.Body>
          <Modal.Body className="green-bg company-work">
            <h3>The Goal</h3>
            <p>
              To replace the outdated Wordpress website into something that
              shows off the four function rooms at The Stolberg. Customers
              needed to be able to easily navigate to the room packages and make
              enquiries.
            </p>
            <h3>How I Helped</h3>
            <ul>
              <li>Complete web design.</li>
              <li>Complete web development.</li>
              <li>
                Created booking services for the various event hire rooms.
              </li>
              <li>Domain and hosting management.</li>
              <li>Google Analytics integration.</li>
              <li>Email subscription and contact form management.</li>
            </ul>
          </Modal.Body>
        </Modal>
        {/* Royal Derby Hotel Modal */}
        <Modal
          show={this.state.show === 'royalDerbyModal'}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton className="green-bg">
            <Modal.Title>Royal Derby Hotel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="company-brief">
              <p>
                The Royal Derby is a bar and hotel in Fitzroy, Melbourne which
                is hugely popular with the sporting community.
              </p>
              <ButtonToolbar className="justify-content-center">
                <Button variant="secondary" target="_blank">
                  Visit Site
                  <FontAwesomeIcon
                    className="chevron-right"
                    icon="chevron-right"
                  />
                </Button>
              </ButtonToolbar>
              <img
                src={royalDerbyHotelModal}
                alt="iD Mobile"
                className="modal-screenshot"
              />
            </div>
          </Modal.Body>
          <Modal.Body className="green-bg company-work">
            <h3>The Goal</h3>
            <p>
              To create a mobile first website with scalable component based
              code. it was a priority to make the foof + drink menus and booking
              functionality as accessible as possible, as well as displaying the
              various events held by the hotel including a live sports schedule.
            </p>
            <h3>How I Helped</h3>
            <ul>
              <li>Complete web design.</li>
              <li>Complete web development using the React framwork.</li>
              <li>Live sports guide via Game On Live Sports API.</li>
              <li>Domain and hosting management.</li>
              <li>Google Analytics integration.</li>
              <li>Email subscription and contact form management.</li>
            </ul>
          </Modal.Body>
        </Modal>
        {/* Jizz Modal */}
        <Modal show={this.state.show === 'jizzModal'} onHide={this.handleClose}>
          <Modal.Header closeButton className="green-bg">
            <Modal.Title>Jizz - The Drinking Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="company-brief">
              <p>
                The Jizz Drinking Game by Spencer & Fleetwood is a hilarious
                party game aimed at hen parties.
              </p>
              <ButtonToolbar className="justify-content-center">
                <Button variant="secondary" target="_blank">
                  Visit Site
                  <FontAwesomeIcon
                    className="chevron-right"
                    icon="chevron-right"
                  />
                </Button>
              </ButtonToolbar>
              <img
                src={jizzModal}
                alt="iD Mobile"
                className="modal-screenshot"
              />
            </div>
          </Modal.Body>
          <Modal.Body className="green-bg company-work">
            <h3>The Goal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pretium nibh ipsum consequat nisl vel pretium lectus quam. Augue
              interdum velit euismod in pellentesque.
            </p>
            <h3>How I Helped</h3>
            <ul>
              <li>Complete web design.</li>
              <li>Complete web development.</li>
              <li>
                Created booking services for the various event hire rooms.
              </li>
              <li>Domain and hosting management.</li>
            </ul>
          </Modal.Body>
        </Modal>
        {/* Surfdome Modal */}
        <Modal
          show={this.state.show === 'surfdomeModal'}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton className="green-bg">
            <Modal.Title>Surfdome</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="company-brief">
              <p>
                Surfdome is an online retailer specialising in surf, snow and
                skate apparel and hardware.
              </p>
              <ButtonToolbar className="justify-content-center">
                <Button variant="secondary" target="_blank">
                  Visit Site
                  <FontAwesomeIcon
                    className="chevron-right"
                    icon="chevron-right"
                  />
                </Button>
              </ButtonToolbar>
              <img
                src={surfdomeModal}
                alt="iD Mobile"
                className="modal-screenshot"
              />
            </div>
          </Modal.Body>
          <Modal.Body className="green-bg company-work">
            <h3>The Goal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pretium nibh ipsum consequat nisl vel pretium lectus quam. Augue
              interdum velit euismod in pellentesque.
            </p>
            <h3>How I Helped</h3>
            <ul>
              <li>
                Working with multiple teams including tech, design, UX and
                trading to manage the front end of the website across 2
                companies and 7 domains.
              </li>
              <li>
                Designing and building HTML email newsletters to a target
                audience of over 1.2 million people.
              </li>
              <li>
                Lead UX designer for complete website design overhaul. Working
                with the UX manager and tech team to produce homepage, PLP, PDP
                and basket & checkout design improvements.
              </li>
              <li>Created A/B tests using Optimizely.</li>
            </ul>
          </Modal.Body>
        </Modal>
        {/* SF Confectionery Modal */}
        <Modal
          show={this.state.show === 'sfconfectionery'}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton className="green-bg">
            <Modal.Title>SF Confectionery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="company-brief">
              <p>
                Surfdome is an online retailer specialising in surf, snow and
                skate apparel and hardware.
              </p>
              <ButtonToolbar className="justify-content-center">
                <Button variant="secondary" target="_blank">
                  Visit Site
                  <FontAwesomeIcon
                    className="chevron-right"
                    icon="chevron-right"
                  />
                </Button>
              </ButtonToolbar>
              <img
                src={sfconfectioneryModal}
                alt="SF Confectionery"
                className="modal-screenshot"
              />
            </div>
          </Modal.Body>
          <Modal.Body className="green-bg company-work">
            <h3>The Goal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pretium nibh ipsum consequat nisl vel pretium lectus quam. Augue
              interdum velit euismod in pellentesque.
            </p>
            <h3>How I Helped</h3>
            <ul>
              <li>
                Working with multiple teams including tech, design, UX and
                trading to manage the front end of the website across 2
                companies and 7 domains.
              </li>
              <li>
                Designing and building HTML email newsletters to a target
                audience of over 1.2 million people.
              </li>
              <li>
                Lead UX designer for complete website design overhaul. Working
                with the UX manager and tech team to produce homepage, PLP, PDP
                and basket & checkout design improvements.
              </li>
              <li>Created A/B tests using Optimizely.</li>
            </ul>
          </Modal.Body>
        </Modal>
        <Row noGutters className="work-tiles">
          <Col xs={12} sm={6} md={4} className="work-one-bg">
            <figure onClick={() => this.handleShow('idmobileModal')}>
              <img src={idmobile} alt="iD Mobile" />
              <figcaption>
                <div>
                  <h3>iD Mobile</h3>
                </div>
              </figcaption>
            </figure>
          </Col>
          <Col xs={12} sm={6} md={4} className="work-two-bg">
            <figure onClick={() => this.handleShow('stolbergModal')}>
              <img src={stolberg} alt="The Stolberg" />
              <figcaption>
                <div>
                  <h3>The Stolberg</h3>
                </div>
              </figcaption>
            </figure>
          </Col>
          <Col xs={12} sm={6} md={4} className="work-three-bg">
            <figure onClick={() => this.handleShow('royalDerbyModal')}>
              <img src={royalDerbyHotel} alt="Royal Derby Hotel" />
              <figcaption>
                <div>
                  <h3>Royal Derby Hotel</h3>
                </div>
              </figcaption>
            </figure>
          </Col>
          <Col xs={12} sm={6} md={4} className="work-four-bg">
            <figure onClick={() => this.handleShow('jizzModal')}>
              <img src={jizz} alt="Jizz The Drinking Game" />
              <figcaption>
                <div>
                  <h3>Jizz The Drinking Game</h3>
                </div>
              </figcaption>
            </figure>
          </Col>
          <Col xs={12} sm={6} md={4} className="work-five-bg">
            <figure onClick={() => this.handleShow('surfdomeModal')}>
              <img src={surfdome} alt="Surfdome" />
              <figcaption>
                <div>
                  <h3>Surfdome</h3>
                </div>
              </figcaption>
            </figure>
          </Col>
          <Col xs={12} sm={6} md={4} className="work-six-bg">
            <figure onClick={() => this.handleShow('sfconfectionery')}>
              <img src={sfconfectionery} alt="iD Mobile" />
              <figcaption>
                <div>
                  <h3>SF Confectionery</h3>
                </div>
              </figcaption>
            </figure>
          </Col>
        </Row>
      </div>
    )
  }
}
