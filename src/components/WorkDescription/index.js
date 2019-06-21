import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import css from 'styled-jsx/css'

import {
  c_PRIMARY_BACKGROUND,
  c_SECONDARY_BACKGROUND,
  GUTTER_PX,
  breakpoint,
  CUT_CORNER_PX,
} from '../../theme'
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
      height: 400px;
    }
  }
`

const WorkDescription = ({
  alternate,
  level,
  title,
  subtitle,
  fluid,
  problem,
  solution,
}) => {
  // Make sure the text is consistently styled
  const T = props => (
    <Text gutter={0} {...props} type={alternate ? 'secondary' : 'primary'} />
  )

  return (
    <div className={`work-description ${alternate ? 'alternate' : ''}`}>
      <ConstrainedWidth>
        <Content imageWidth={imageWidth} alternate={alternate}>
          <Content.Title>
            <Heading level={level} size="medium">
              <T heavy>{title}</T>
            </Heading>
            <Heading level={level + 1} size="normal">
              <T>{subtitle}</T>
            </Heading>
          </Content.Title>
          <Content.Image>
            <div className="image">
              <Img className={imageStyles.className} fluid={fluid} />
            </div>
          </Content.Image>
          <Content.Description>
            <ProblemSolution
              alternate={alternate}
              level={level + 2}
              problem={problem}
              solution={solution}
            />
          </Content.Description>
        </Content>
      </ConstrainedWidth>
      {imageStyles.styles}
      <style jsx>{`
        .work-description {
          background-color: ${c_PRIMARY_BACKGROUND};
          width: 100%;
        }
        .work-description.alternate {
          background-color: ${c_SECONDARY_BACKGROUND};
        }

        .image {
          position: relative;
        }
        .image::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          /* Copy/pasted from TribeMember and Carousel: TODO centralise in theme? */
          background: linear-gradient(
            -45deg,
            ${alternate ? c_SECONDARY_BACKGROUND : c_PRIMARY_BACKGROUND}
              ${CUT_CORNER_PX}px,
            transparent ${CUT_CORNER_PX}px
          );
        }

        /** MED + */
        @media (${breakpoint('md')}) {
          .work-description {
            padding: ${GUTTER_PX * 4}px ${GUTTER_PX}px;
          }
        }
      `}</style>
    </div>
  )
}

WorkDescription.propTypes = {
  alternate: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  fluid: Img.propTypes.fluid,
  // imagePos: PropTypes.oneOf(['left', 'right']), perhaps use alternate?
  image: PropTypes.node,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  problem: PropTypes.node,
  solution: PropTypes.node,
}

export { default as WorkSummary } from './Summary'
export default WorkDescription
