import React from 'react'
import PropTypes from 'prop-types'

import { GatsbyImage } from 'gatsby-plugin-image'
import css from 'styled-jsx/css'

import { breakpoint } from '../../theme'
import ConstrainedWidth from '../Layout/ConstrainedWidth'
import H from '../Heading'
import Text from '../Text'
import ProblemSolution from './ProblemSolution'
import Content from './Content'
import VerticalSpacing from '../VerticalSpacing'
import Section from '../Section'

const imageStyles = css.resolve`
  @media (${breakpoint('md')}) {
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`

const WorkSummary = ({ title, image, problem }) => {
  return (
    <div>
      <ConstrainedWidth>
        <Content>
          <VerticalSpacing size={2} />

          <Content.Title>
            <Text size="medium" weight={700}>
              <H>{title}</H>
            </Text>
          </Content.Title>

          <Content.Image>
            <GatsbyImage
              className={imageStyles.className}
              image={image}
              alt={title}
            />
          </Content.Image>

          <Content.Description>
            <Section>
              <ProblemSolution problem={problem} />
            </Section>
          </Content.Description>
        </Content>
      </ConstrainedWidth>

      {imageStyles.styles}
    </div>
  )
}

WorkSummary.propTypes = {
  image: PropTypes.shape({
    images: PropTypes.object,
    layout: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  title: PropTypes.node,
  problem: PropTypes.node,
}

export default WorkSummary
