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

const Content = ({ children }) => (
  <div className="work-description-content">
    <div className="title-description">
      {cloneWithProps(findChild(children, Name), {
        key: 'client',
      })}

      {cloneWithProps(findChild(children, Title), {
        key: 'title',
      })}
    </div>

    {cloneWithProps(findChild(children, Image), {
      key: 'image',
    })}

    {cloneWithProps(findChild(children, Description), {
      key: 'description',
    })}

    <style jsx>{`
      .work-description-content {
        padding-top: 2.3rem;
        padding-left: 2.3rem;
        padding-right: 3.5rem;
        border-radius: 38px;
        display: flex;
        justify-content: space-around;
      }

      .title-description {
        display: block;
      }

      .stacked-content {
        flex: 1;
      }
    `}</style>
  </div>
)
// Name -------------------------------------
export const Name = ({ children }) => <div>{children}</div>

Name.displayName = 'WorkDescriptionName'
Name.propTypes = propTypes
// Title -------------------------------------
export const Title = ({ children }) => (
  <div className="hi">
    {children}
    <style jsx>{`
      .hi {
        width: 45ch;
      }
    `}</style>
  </div>
)

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
        width: 50%;
        float: right;
        white-space: pre-line;
        padding-top: 4.8rem;
        padding-left: 2rem;
      }
    `}</style>
  </div>
)

Description.displayName = 'WorkDescriptionDescription'
Description.propTypes = propTypes
Content.Name = Name
Content.Title = Title
Content.Image = Image
Content.Description = Description

export default Content
