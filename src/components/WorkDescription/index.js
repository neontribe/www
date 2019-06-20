import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import css from 'styled-jsx/css'

import {
  c_PRIMARY_BACKGROUND,
  c_SECONDARY_BACKGROUND,
  GUTTER_PX,
} from '../../theme'
import ConstrainedWidth from '../Layout/ConstrainedWidth'
import Heading from '../Heading'
import Text from '../Text'
import VerticalSpacing from '../VerticalSpacing'

const imageWidth = 300
const imageStyles = css.resolve`
  .gatsby-image-wrapper {
    width: ${imageWidth}px;
    height: 400px;
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
    <Text {...props} type={alternate ? 'secondary' : 'primary'} />
  )

  return (
    <div className="work-description">
      <ConstrainedWidth>
        <div className="work-description-content">
          <div className="header">
            <Heading level={level} size="medium">
              <T heavy>{title}</T>
            </Heading>
            <Heading level={level + 1} size="xsmall">
              <T>{subtitle}</T>
            </Heading>
            <VerticalSpacing size={2} />
          </div>
          <div className="image">
            <Img className={imageStyles.className} fluid={fluid} />
          </div>
          <div className="description">
            <div>
              <Heading level={level + 2} size="small">
                <T heavy>Problem</T>
              </Heading>
              <p>
                <T>{problem}</T>
              </p>
              <VerticalSpacing size={2} />
            </div>
            <div>
              <Heading level={level + 2} size="small">
                <T heavy>Solution</T>
              </Heading>
              <p>
                <T>{solution}</T>
              </p>
            </div>
          </div>
        </div>
      </ConstrainedWidth>
      {imageStyles.styles}
      <style jsx>{`
        .work-description {
          background-color: ${alternate
            ? c_SECONDARY_BACKGROUND
            : c_PRIMARY_BACKGROUND};
          width: 100%;
          padding: ${GUTTER_PX * 4}px 0;
        }
        .work-description-content::after {
          content: '';
          display: block;
          clear: both;
        }

        .image {
        }

        .description p {
          margin: 0;
        }

        /** MQ */
        .image {
          float: right;
        }

        .header,
        .description {
          padding-right: ${GUTTER_PX * 4}px;
          float: left;
          width: calc(100% - ${imageWidth}px);
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

export default WorkDescription
