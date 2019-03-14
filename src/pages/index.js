import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Landing from '../components/landing'
import About from '../components/about'
import Interests from '../components/interests'
import TechStack from '../components/techStack'
import Work from '../components/work'
import Contact from '../components/contact'

import ScrollableAnchor from 'react-scrollable-anchor'
import {
  configureAnchors,
  goToAnchor,
  removeHash
} from 'react-scrollable-anchor'

export default class IndexPage extends React.Component {
  componentDidMount() {
    configureAnchors({ offset: -30, scrollDuration: 400 })
    goToAnchor(
      'about',
      true,
      'interests',
      true,
      'tech-stack',
      true,
      'work',
      true,
      'contact',
      true
    )
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
