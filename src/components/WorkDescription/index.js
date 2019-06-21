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
import Description from './Description'

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
        <div className="work-description-content">
          <div className="header">
            <Heading level={level} size="medium">
              <T heavy>{title}</T>
            </Heading>
            <Heading level={level + 1} size="normal">
              <T>{subtitle}</T>
            </Heading>
          </div>
          <div className="image">
            <Img className={imageStyles.className} fluid={fluid} />
          </div>
          <div className="description">
            <Description
              alternate={alternate}
              level={level + 2}
              problem={problem}
              solution={solution}
            />
          </div>
        </div>
      </ConstrainedWidth>
      {imageStyles.styles}
      <style jsx>{`
        .work-description {
          padding: ${GUTTER_PX * 4}px 0;
          background-color: ${c_PRIMARY_BACKGROUND};
          width: 100%;
        }
        .work-description.alternate {
          background-color: ${c_SECONDARY_BACKGROUND};
        }
        .work-description-content {
          padding: 0 ${GUTTER_PX}px;
        }
        .work-description-content::after {
          content: '';
          display: block;
          clear: both;
        }

        .header {
          margin-bottom: ${2 * GUTTER_PX}px;
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

        .description,
        .header {
          padding: 0 ${GUTTER_PX * 2}px;
        }

        /** MED + */
        @media (${breakpoint('md')}) {
          .work-description {
            padding: ${GUTTER_PX * 4}px ${GUTTER_PX}px;
          }

          .header {
            margin-bottom: 0;
          }

          .image {
            float: right;
          }
          .alternate .image {
            float: left;
          }

          .header,
          .description {
            float: left;
            padding-right: ${GUTTER_PX * 4}px;
            padding-left: 0;
            width: calc(100% - ${imageWidth + 2 * GUTTER_PX}px); /*  */
          }

          .alternate .header,
          .alternate .description {
            padding-left: ${GUTTER_PX * 4}px;
            padding-right: 0;
            float: right;
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
