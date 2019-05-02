import React from 'react'
import { Container, ButtonToolbar, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Document, Page } from 'react-pdf'
import WillHolstenCV from '../images/WillHolstenCV.pdf'
import WillHolstenCV1 from '../images/WillHolstenCV1.pdf'
import WillHolstenCV2 from '../images/WillHolstenCV2.pdf'

export default class SecondPage extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { pageNumber } = this.state

    return (
      <Layout>
        <SEO title="Will Holsten | CV" />
        <Container>
          <Document
            file={WillHolstenCV1}
            onLoadSuccess={this.onDocumentLoadSuccess}
            width="800"
          >
            <Page width={800} pageNumber={pageNumber} />
          </Document>
          <Document
            file={WillHolstenCV2}
            onLoadSuccess={this.onDocumentLoadSuccess}
            width="800"
          >
            <Page width={800} pageNumber={pageNumber} />
          </Document>
          <ButtonToolbar className="justify-content-center">
            <Button variant="primary" href={WillHolstenCV}>
              <FontAwesomeIcon className="download" icon="download" />
              CV
            </Button>
            <Button href="/" variant="primary">
              Return Home
              <FontAwesomeIcon className="arrow-right" icon="arrow-right" />
            </Button>
          </ButtonToolbar>
        </Container>
      </Layout>
    )
  }
}
