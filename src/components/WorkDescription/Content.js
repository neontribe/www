import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { breakpoint } from '../../theme'
import VerticalSpacing from '../VerticalSpacing'

// Copied from FlipCard
const findChild = (children, { displayName }) =>
  Children.toArray(children).find(
    (child) => child.type && child.type.displayName === displayName
  )
const cloneWithProps = (node, props) => node && React.cloneElement(node, props)

const propTypes = {
  imagePosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
}

const Content = ({ imagePosition = 'right', children }) => (
  <div className="work-description-content">
    {cloneWithProps(findChild(children, Title), {
      key: 'title',
    })}

    <VerticalSpacing size={3} />

    {cloneWithProps(findChild(children, Image), {
      key: 'image',
    })}

    {cloneWithProps(findChild(children, Description), {
      key: 'description',
    })}

    <style jsx>{`
      .work-description-content {
        display: flex;
        justify-content: space-between;
        padding-top: 2.3rem;
        padding-left: 2.3rem;
        padding-right: 3.5rem;
        border-radius: 38px;

        ${imagePosition === 'left' ? 'flex-direction: row-reverse;' : ''}
      }

      .stacked-content {
        flex: 1;
      }
    `}</style>
  </div>
)

// Title -------------------------------------
export const Title = ({ children }) => <div>{children}</div>

Title.displayName = 'WorkDescriptionTitle'
Title.propTypes = propTypes

// Image -------------------------------------
export const Image = ({ children }) => (
  <div className="image">
    {children}

    <style jsx>{`
      .image {
        width: 100%;
        height: 30%;
        display: inline-block;

        margin-top: 1em;
      }
    `}</style>
  </div>
)

Image.displayName = 'WorkDescriptionImage'
Image.propTypes = {
  ...propTypes,

  imagePosition: PropTypes.oneOf(['left', 'right']),
}

// Description -------------------------------------
export const Description = ({ children }) => (
  <div className="description">
    {children}

    <style jsx>{`
      .description {
        color: black;
        padding-top: 5.5rem;
        width: 50%;
        float: right;

        white-space: pre-line;
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
