import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image/withIEPolyfill'
import ShimlessImg from 'gatsby-image'
import css from 'styled-jsx/css'

import { breakpoint } from '../../theme'
import ConstrainedWidth from '../Layout/ConstrainedWidth'
import ProjectContainer from '../Layout/ProjectContainer'
import H from '../Heading'
import Section from '../Section'
import Text from '../Text'
import VerticalSpacing from '../VerticalSpacing'
import ProblemSolution from './ProblemSolution'
import Content from './Content'

const imageStyles = css.resolve`
  @media (${breakpoint('md')}) {
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`

const WorkDescription = ({
  id,
  title,
  client,
  fluid,
  problem,
  solution,
  imagePosition,
}) => (
  <section id={id}>
    <ProjectContainer>
      <Content imagePosition={imagePosition}>
        <div className="hello">
          <Content.Client>{client}</Content.Client>

          <Content.Title>{title}</Content.Title>
        </div>

        <Content.Image>
          <div className="image">
            <Img className={imageStyles.className} fluid={fluid} />
          </div>
        </Content.Image>

        <Content.Description>
          <Section>
            <Section>
              <ProblemSolution problem={problem} solution={solution} />
            </Section>
          </Section>
        </Content.Description>
      </Content>
    </ProjectContainer>

    {imageStyles.styles}

    <style jsx>{`
      .image {
        height: 100%;
        max-height: 600px;
      }

      .heading {
      }
    `}</style>
  </section>
)

WorkDescription.propTypes = {
  fluid: ShimlessImg.propTypes.fluid,
  image: PropTypes.node,
  imagePosition: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.node,
  subtitle: PropTypes.node,
  problem: PropTypes.node,
  solution: PropTypes.node,
}

export { default as WorkSummary } from './WorkSummary'
export default WorkDescription
