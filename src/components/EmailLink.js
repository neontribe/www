import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import { c_NEON_TEAL, c_TEXT_DARK } from '../theme'

const EmailLink = ({
  children,
  border_color,
  background,
  mobileSize,
  link,
}) => (
  <div>
    <a href={link} target="_blank">
      {children}
    </a>

    <style jsx>{`
      a {
        vertical-align: middle;
        padding: 0.5rem 2rem;
        ${background ? `background-color: ${background};` : ''}
        border-radius: 350px;
        cursor: pointer;
        max-width: 20vw;
        max-height: 100%;
        text-align: center;
        border-style: solid;
        color: white;
        ${border_color ? `border-color: ${border_color};` : ''}
        font-weight:700;

        font-size: 1.25rem;
        font-family: KeepCalm;
        font-weight: bold;
      }

      a:hover {
        background-color: ${c_NEON_TEAL};
        border-color: ${c_NEON_TEAL};
        color: ${c_TEXT_DARK};
      }
      @media (max-width: 860px) {
        a {
          width: 70vw;
          margin-bottom: 2rem;
        }
      }

      @media (max-width: 500px) {
        a {
          width: 100vw;

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
  mobileSize: PropTypes.string,
}

export default EmailLink
