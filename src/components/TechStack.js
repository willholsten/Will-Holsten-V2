import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Assets
import Html from './../images/brands/html.svg'
import Css from './../images/brands/css.svg'
import Sass from './../images/brands/sass.svg'
import Bootstrap from './../images/brands/bootstrap.svg'
import Javascript from './../images/brands/javascript.svg'
import Jquery from './../images/brands/jquery.svg'
import ReactSvg from './../images/brands/reactSkill.svg'
import Redux from './../images/brands/redux.svg'
import Npm from './../images/brands/npm.svg'
import Webpack from './../images/brands/webpack.svg'
import Babel from './../images/brands/babel.svg'
import Jest from './../images/brands/jest.svg'
import Git from './../images/brands/git.svg'
import Atlassian from './../images/brands/atlassian.svg'
import AdobeCC from './../images/brands/adobe-cc.svg'

class TechStack extends React.Component {
  constructor() {
    super()
    this.state = {
      skills: [
        {
          name: 'html',
          path: Html
        },
        {
          name: 'css',
          path: Css
        },
        {
          name: 'sass',
          path: Sass
        },
        {
          name: 'bootstrap',
          path: Bootstrap
        },
        {
          name: 'javascript',
          path: Javascript
        },
        {
          name: 'jquery',
          path: Jquery
        },
        {
          name: 'react',
          path: ReactSvg
        },
        {
          name: 'redux',
          path: Redux
        },
        {
          name: 'npm',
          path: Npm
        },
        {
          name: 'webpack',
          path: Webpack
        },
        {
          name: 'babel',
          path: Babel
        },
        {
          name: 'jest',
          path: Jest
        },
        {
          name: 'git',
          path: Git
        },
        {
          name: 'atlassian',
          path: Atlassian
        },
        {
          name: 'adobe cc',
          path: AdobeCC
        }
      ]
    }
  }

  render() {
    return (
      <div className="section-container white-bg">
        <Container>
          <h3 className="section-header">Tech Stack</h3>
          <Row className="skills">
            {this.state.skills.map(skill => (
              <Col xs={4} sm={3} key={skill.name}>
                <img src={skill.path} alt={skill.name} className="skill-icon" />
                {skill.name}
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

export default TechStack
