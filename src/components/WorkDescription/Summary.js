import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import css from 'styled-jsx/css'

import { GUTTER_PX, breakpoint } from '../../theme'
import ConstrainedWidth from '../Layout/ConstrainedWidth'
import Heading from '../Heading'
import Text from '../Text'
import ProblemSolution from './ProblemSolution'
import Content from './Content'
import VerticalSpacing from '../VerticalSpacing'

const imageWidth = 250
const imageStyles = css.resolve`
  .gatsby-image-wrapper {
    margin: 0 auto;
  }

  @media (${breakpoint('md')}) {
    .gatsby-image-wrapper {
      width: ${imageWidth}px;
      height: ${imageWidth}px;
    }
  }
`

const WorkDescription = ({ alternate, level, title, fluid, problem }) => {
  // Make sure the text is consistently styled
  const T = props => (
    <Text gutter={0} {...props} type={alternate ? 'secondary' : 'primary'} />
  )

  return (
    <div className="work-description">
      <ConstrainedWidth>
        <Content alternate={alternate} imageWidth={imageWidth}>
          <Content.Title>
            <Heading level={level} size="medium">
              <VerticalSpacing size={2} />
              <T heavy>{title}</T>
            </Heading>
          </Content.Title>
          <Content.Image>
            <Img className={imageStyles.className} fluid={fluid} />
          </Content.Image>
          <Content.Description>
            <div className="problem-solution-wrapper">
              <ProblemSolution
                alternate={alternate}
                level={level + 2}
                problem={problem}
              />
            </div>
          </Content.Description>
        </Content>
      </ConstrainedWidth>
      {imageStyles.styles}
      <style jsx>{`
        .problem-solution-wrapper {
          padding-right: ${4 * GUTTER_PX}px;
        }
      `}</style>
    </div>
  )
}

WorkDescription.propTypes = {
  alternate: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  fluid: Img.propTypes.fluid,
  image: PropTypes.node,
  title: PropTypes.node,
  problem: PropTypes.node,
}

export default WorkDescription
