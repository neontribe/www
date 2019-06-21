import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { GUTTER_PX, breakpoint } from '../../theme'

// Copied from FlipCard
const findChild = (children, { displayName }) =>
  Children.toArray(children).find(
    child => child.type && child.type.displayName === displayName
  )
const cloneWithProps = (node, props) => node && React.cloneElement(node, props)

const propTypes = {
  children: PropTypes.node,
  alternate: PropTypes.bool,
  imageWidth: PropTypes.number,
}

const Content = ({ alternate, children, imageWidth }) => (
  <div className="work-description-content">
    {cloneWithProps(findChild(children, Title), { alternate, imageWidth })}
    {cloneWithProps(findChild(children, Image), { alternate, imageWidth })}
    {cloneWithProps(findChild(children, Description), {
      alternate,
      imageWidth,
    })}
    <style jsx>{`
      .work-description-content {
        padding: 0 ${GUTTER_PX}px;
      }
      .work-description-content::after {
        content: '';
        display: block;
        clear: both;
      }
    `}</style>
  </div>
)
Content.propTypes = {
  ...propTypes,
  imageWidth: PropTypes.number.isRequired,
}

// Title -------------------------------------
export const Title = ({ alternate, imageWidth, children }) => (
  <div className="header">
    {children}
    <style jsx>{`
      .header {
        margin-bottom: ${2 * GUTTER_PX}px;
        padding: 0 ${GUTTER_PX * 2}px;
      }

      @media (${breakpoint('md')}) {
        .header {
          margin-bottom: 0;
        }

        .header {
          float: ${alternate ? 'right' : 'left'};
          padding-right: ${alternate ? 0 : GUTTER_PX * 4}px;
          padding-left: ${alternate ? GUTTER_PX * 4 : 0}px;
          width: calc(100% - ${imageWidth + 2 * GUTTER_PX}px);
        }
      }
    `}</style>
  </div>
)
Title.displayName = 'WorkDescriptionTitle'
Title.propTypes = propTypes

// Image -------------------------------------
export const Image = ({ alternate, children }) => (
  <div className="image">
    {children}
    <style jsx>{`
      .image {
        /* Pull the image outside of the padding of the .work-description-content */
        margin: 0 -${GUTTER_PX}px;
      }

      @media (${breakpoint('md')}) {
        .image {
          float: ${alternate ? 'left' : 'right'};
          margin: 0;
        }
      }
    `}</style>
  </div>
)
Image.displayName = 'WorkDescriptionImage'
Image.propTypes = propTypes

// Description -------------------------------------
export const Description = ({ alternate, children, imageWidth }) => (
  <div className="description">
    {children}
    <style jsx>{`
      .description {
        padding: 0 ${GUTTER_PX * 2}px;
      }

      @media (${breakpoint('md')}) {
        .description {
          float: ${alternate ? 'right' : 'left'};
          padding-right: ${alternate ? 0 : GUTTER_PX * 4}px;
          padding-left: ${alternate ? GUTTER_PX * 4 : 0}px;
          width: calc(100% - ${imageWidth + 2 * GUTTER_PX}px);
        }
      }
    `}</style>
  </div>
)
Description.displayName = 'WorkDescriptionDescription'
Description.propTypes = propTypes

Content.Title = Title
Content.Image = Image
Content.Description = Description

export default Content
