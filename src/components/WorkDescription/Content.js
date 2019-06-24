import React, { Children } from 'react'
import PropTypes from 'prop-types'
import {
  GUTTER_PX,
  breakpoint,
  c_PRIMARY_BACKGROUND,
  c_SECONDARY_BACKGROUND,
} from '../../theme'

// Copied from FlipCard
const findChild = (children, { displayName }) =>
  Children.toArray(children).find(
    child => child.type && child.type.displayName === displayName
  )
const cloneWithProps = (node, props) => node && React.cloneElement(node, props)

const propTypes = {
  children: PropTypes.node,
  alternate: PropTypes.bool,
}

const Content = ({ alternate, children }) => (
  <div className="work-description-content">
    <div className="stacked-content">
      {cloneWithProps(findChild(children, Title), {
        alternate,
        key: 'title',
      })}
      {cloneWithProps(findChild(children, Image), {
        alternate,
        middle: true,
        key: 'image-middle',
      })}
      {cloneWithProps(findChild(children, Description), {
        alternate,
        key: 'description',
      })}
    </div>
    {cloneWithProps(findChild(children, Image), {
      alternate,
      key: 'image-bottom',
    })}
    <style jsx>{`
      .work-description-content {
        /* Used as a negative margin for the image, to pull the image outside padding horizontally */
        padding: 0 ${GUTTER_PX}px;
        display: flex;
        flex-direction: ${alternate ? 'row-reverse' : 'row'};
      }

      .stacked-content {
        background-color: ${alternate
          ? c_SECONDARY_BACKGROUND
          : c_PRIMARY_BACKGROUND};
      }
    `}</style>
  </div>
)
Content.propTypes = propTypes

// Title -------------------------------------
export const Title = ({ alternate, children }) => (
  <div className="header">
    {children}
    <style jsx>{`
      .header {
        margin-bottom: ${2 * GUTTER_PX}px;
        padding: 0 ${GUTTER_PX * 2}px;
        background-color: ${alternate
          ? c_SECONDARY_BACKGROUND
          : c_PRIMARY_BACKGROUND};
      }

      @media (${breakpoint('md')}) {
        .header {
          margin-bottom: 0;
        }

        .header {
          padding-right: ${alternate ? 0 : GUTTER_PX * 4}px;
          padding-left: ${alternate ? GUTTER_PX * 4 : 0}px;
        }
      }
    `}</style>
  </div>
)
Title.displayName = 'WorkDescriptionTitle'
Title.propTypes = propTypes

// Image -------------------------------------
export const Image = ({ middle, children }) => (
  <div className="image">
    {children}
    <style jsx>{`
      .image {
        /* Pull the image outside of the padding of the .work-description-content */
        margin: 0 -${GUTTER_PX}px;
        display: ${middle ? 'block' : 'none'};
      }

      @media (${breakpoint('md')}) {
        .image {
          margin: 0;
          display: ${middle ? 'none' : 'block'};
          width: 33.33%;
          flex-shrink: 0;
        }
      }
    `}</style>
  </div>
)
Image.displayName = 'WorkDescriptionImage'
Image.propTypes = {
  ...propTypes,
  middle: PropTypes.bool,
}

// Description -------------------------------------
export const Description = ({ alternate, children }) => (
  <div className="description">
    {children}
    <style jsx>{`
      .description {
        padding: 0 ${GUTTER_PX * 2}px;
      }

      @media (${breakpoint('md')}) {
        .description {
          padding-right: ${alternate ? 0 : GUTTER_PX * 4}px;
          padding-left: ${alternate ? GUTTER_PX * 4 : 0}px;
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
