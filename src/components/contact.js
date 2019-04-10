import React from 'react'
import { Container, ButtonToolbar, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollAnimation from 'react-animate-on-scroll'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="section-container white-bg">
        <Container>
          <h3 className="section-header">Get in Touch</h3>
          <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
            <form method="post" action="" className="justify-content-center">
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                autoComplete="given-name"
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = 'First name')}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                autoComplete="family-name"
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = 'Last name')}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = 'Email')}
              />
              <textarea
                type="text"
                name="message"
                placeholder="Message..."
                autoComplete="off"
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = 'Message...')}
              />
              <ButtonToolbar>
                <Button link="" type="submit" label="Submit" variant="primary">
                  Submit
                  <FontAwesomeIcon className="arrow-right" icon="arrow-right" />
                </Button>
              </ButtonToolbar>
            </form>
          </ScrollAnimation>
        </Container>
      </div>
    )
  }
}
