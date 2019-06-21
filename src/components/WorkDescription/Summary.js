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

const imageWidth = 300
const imageStyles = css.resolve`
  .gatsby-image-wrapper {
    margin: 0 auto;
  }

  @media (${breakpoint('md')}) {
    .gatsby-image-wrapper {
      width: ${imageWidth}px;
      height: 100%;
    }
  }
`

// This is mostly copy/pasted from ./index.js
// TODO: Refactor index and summary to share more components, they don't currently feel similar enough
const WorkDescription = ({ alternate, level, title, fluid, problem }) => {
  // Make sure the text is consistently styled
  const T = props => (
    <Text gutter={0} {...props} type={alternate ? 'secondary' : 'primary'} />
  )

  return (
    <div className={`work-description ${alternate ? 'alternate' : ''}`}>
      <ConstrainedWidth>
        <Content alternate={alternate} imageWidth={imageWidth}>
          <Content.Title>
            <Heading level={level} size="medium">
              <T heavy>{title}</T>
            </Heading>
          </Content.Title>
          <Content.Image>
            <Img className={imageStyles.className} fluid={fluid} />
          </Content.Image>
          <Content.Description>
            <ProblemSolution
              alternate={alternate}
              level={level + 2}
              problem={problem}
            />
          </Content.Description>
        </Content>
      </ConstrainedWidth>
      {imageStyles.styles}
      <style jsx>{`
        .work-description {
          padding: ${GUTTER_PX * 4}px 0;
          width: 100%;
        }

        .description,
        .header {
          padding: 0 ${GUTTER_PX * 2}px;
        }

        /** MED + */
        @media (${breakpoint('md')}) {
          .work-description {
            padding: ${GUTTER_PX * 4}px ${GUTTER_PX}px;
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
