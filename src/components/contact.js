import React from 'react'
import { Container, ButtonToolbar, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="section-container white-bg">
        <Container>
          <h3 className="section-header">Get in Touch</h3>

          <form method="post" action="" className="justify-content-center">
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              autoComplete="First Name"
              onFocus={e => (e.target.placeholder = '')}
              onBlur={e => (e.target.placeholder = 'First Name')}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              autoComplete="Last Name"
              onFocus={e => (e.target.placeholder = '')}
              onBlur={e => (e.target.placeholder = 'Last Name')}
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
        </Container>
      </div>
    )
  }
}
