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
  children: PropTypes.node,
}

const Content = ({ children }) => (
  <div className="work-description-content">
    <div className="stacked-content">
      {cloneWithProps(findChild(children, Client), {
        key: 'client',
      })}

      {cloneWithProps(findChild(children, Title), {
        key: 'title',
      })}

      <VerticalSpacing size={3} />

      {cloneWithProps(findChild(children, Description), {
        key: 'description',
      })}
    </div>

    {cloneWithProps(findChild(children, Image), {
      key: 'image-bottom',
    })}

    <style jsx>{`
      .work-description-content {
        display: flex;
        justify-content: space-between;
      }

      .stacked-content {
        flex: 1;
      }
    `}</style>
  </div>
)
// Client ----------------------------------

export const Client = ({ children }) => (
  <div>
    {children}

    <style jsx>{`
      
        background-color: rgb(86, 29, 238);
        margin-bottom: 1rem;
        padding: 12px 24px 13px 21px;
        float: left;
        max-width: 60ch;
        border-radius: 0px 0px 38px;
        display: inline-block;
      }
      
    `}</style>
  </div>
)

Client.displayName = 'WorkDescriptionClient'
Client.propTypes = propTypes

// Title -------------------------------------
export const Title = ({ children }) => (
  <div className="project-title">
    {children}
    <style jsx>{`
      color: black;
    `}</style>
  </div>
)

Title.displayName = 'WorkDescriptionTitle'
Title.propTypes = propTypes

// Image -------------------------------------
export const Image = ({ middle, imagePosition, children }) => (
  <div className="image">
    {children}

    <style jsx>{`
      .image {
        display: ${middle ? 'block' : 'none'};
        margin-bottom: 2rem;
      }

      @media (${breakpoint('md')}) {
        .image {
          display: ${middle ? 'none' : 'block'};
          flex-shrink: 0;
          width: 33.33%;
          margin-bottom: 0;
          margin-${imagePosition === 'right' ? 'left' : 'right'}: 2rem;
        }
      }
    `}</style>
  </div>
)

Image.displayName = 'WorkDescriptionImage'
Image.propTypes = {
  ...propTypes,
  middle: PropTypes.bool,
  imagePosition: PropTypes.oneOf(['left', 'right']),
}

// Description -------------------------------------
export const Description = ({ children }) => (
  <div className="description">{children}</div>
)

Description.displayName = 'WorkDescriptionDescription'
Description.propTypes = propTypes

Content.Title = Title
Content.Image = Image
Content.Description = Description
Content.Client = Client

export default Content
