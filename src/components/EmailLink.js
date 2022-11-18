import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import { c_NEON_TEAL, c_TEXT_DARK } from '../theme'

const EmailLink = ({
  children,
  border_color,
  background,
  margin_left,
  mobileSize,
  link,
}) => (
  <div>
    <a href={link}>{children}</a>

    <style jsx>{`
      div {
        vertical-align: middle;
        padding: 0.5rem 2rem;
        ${background ? `background-color: ${background};` : ''}
        border-radius: 350px;
        cursor: pointer;
        width: 31vh;
        max-height: 100%;
        text-align: center;
        border-style: solid;
        color: white;
        ${border_color ? `border-color: ${border_color};` : ''}
        font-weight:700;
        ${margin_left ? `margin-left: ${margin_left};` : ''}
        font-size:0.9rem;
        font-family: KeepCalm;
        font-weight: bold;
      }

      div:hover {
        background-color: ${c_NEON_TEAL};
        border-color: ${c_NEON_TEAL};
        color: ${c_TEXT_DARK};
      }
      @media (max-width: 860px) {
        div {
          width: 100%;
          margin-bottom: 2rem;
          ${mobileSize ? `font-size: ${mobileSize};` : ''}
        }
      }
    `}</style>
  </div>
)
Text.propTypes = {
  connect: PropTypes.string,
  link: PropTypes.string.isRequired,
  children: PropTypes.node,
  border_color: PropTypes.string,
  background: PropTypes.string,
  margin_left: PropTypes.string,
  mobileSize: PropTypes.string,
}

export default EmailLink
