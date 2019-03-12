import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Landing from '../components/landing'
import About from '../components/about.js'
import Interests from '../components/interests.js'
import TechStack from '../components/techStack.js'
import Work from '../components/work.js'
import Contact from '../components/contact.js'

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
