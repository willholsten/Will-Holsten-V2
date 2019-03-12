import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Landing from './../components/Landing'
import About from './../components/About'
import Interests from './../components/Interests'
import TechStack from './../components/TechStack'
import Work from './../components/Work'
import Contact from './../components/Contact'
import '../styles/styles.scss'

import ScrollableAnchor from 'react-scrollable-anchor'
import {
  configureAnchors,
  goToAnchor,
  removeHash
} from 'react-scrollable-anchor'

export default class IndexPage extends React.Component {
  componentDidMount() {
    configureAnchors({ offset: -30 })
    goToAnchor('about', false)
    removeHash()
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Will Holsten | Front End Development"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <Landing />
        <ScrollableAnchor id={'about'}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'interests'}>
          <Interests />
        </ScrollableAnchor>
        <ScrollableAnchor id={'tech-stack'}>
          <TechStack />
        </ScrollableAnchor>
        <ScrollableAnchor id={'work'}>
          <Work />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
      </Layout>
    )
  }
}
