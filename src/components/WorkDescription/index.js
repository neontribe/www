import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image/withIEPolyfill'
import ShimlessImg from 'gatsby-image'
import css from 'styled-jsx/css'

import { breakpoint } from '../../theme'
import ProjectConstrainedWidth from '../Layout/ConstrainedWidth'
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

const WorkDescription = ({ id, title, client, fluid, problem, solution }) => (
  <section id={id}>
    <ProjectConstrainedWidth background="white">
      <Content>
        <Content.Title>
          <Section>
            <Text size="normal">
              <div className="leaf">
                <H>{client}</H>
              </div>
            </Text>

            <VerticalSpacing size={1} />
            <div className="title">
              <Text size="medium" color="black" weight={700}>
                <H>{title}</H>
              </Text>
              <Content.Image>
                <Img className={imageStyles.className} fluid={fluid} />
              </Content.Image>
            </div>
          </Section>
        </Content.Title>

        <Content.Description>
          <Section>
            <Section>
              <ProblemSolution problem={problem} solution={solution} />
            </Section>
          </Section>
        </Content.Description>
      </Content>
    </ProjectConstrainedWidth>

    {imageStyles.styles}

    <style jsx>{`
      .image {
        height: 100%;
        max-height: 200px;
      }

      .title {
        max-width: 45ch;
      }

      .leaf {
        background-color: #561dee;
        margin: 0 250px 23px 0;
        padding: 12px 24px 13px 21px;
        float: left;
        font-size: 22px;

        border-radius: 0 0 38px 0;
        display: inline-block;
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
