import React from 'react'
import { Document } from 'react-pdf'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WillHolstenCV from '../../public/static/Will-Holsten-CV.pdf'

export default class SecondaPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="CV | Will Holsten | Front End Development"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <Document
          file={WillHolstenCV}
          onLoadSuccess={this.onDocumentLoadSuccess}
        />
      </Layout>
    )
  }
}
