import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, ButtonToolbar, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found white-bg">
      <Container>
        <h1>Oops...</h1>
        <p>We can't seem to find that page!</p>
        <ButtonToolbar className="justify-content-center">
          <Button href="/" variant="primary">
            Return home
            <FontAwesomeIcon className="arrow-right" icon="arrow-right" />
          </Button>
        </ButtonToolbar>
      </Container>
    </div>
  </Layout>
)

export default NotFoundPage
