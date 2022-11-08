import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import { navigate as NavTrial } from 'gatsby'
import {
  c_NEON_TEAL,
  c_TEXT_DARK,
  c_TEXT_LIGHT,
  FONT_SECONDARY,
} from '../theme'

const StyledLink = ({
  children,
  border_color,
  connect,
  background,
  margin_left,
  buttonWidth,
  mobileSize,
}) => (
  <>
    <button
      onClick={() => {
        NavTrial(connect)
      }}
    >
      {children}
    </button>
    <style jsx>{`
      button {
        vertical-align: middle;
        padding: 0.5rem 2rem;
        ${background ? `background-color: ${background};` : ''}
        border-radius: 350px;

        cursor: pointer;
        max-width: 200ch;
        max-height: 100%;
        text-align: center;
        border-style: solid;
        color: black;

        ${border_color ? `border-color: ${border_color};` : ''}
        font-weight:700;

        ${margin_left ? `margin-left: ${margin_left};` : ''}
        font-size:1.25rem;
        font-family: ${FONT_SECONDARY};
        font-weight: bold;
        color: ${c_TEXT_LIGHT};
      }

      button:hover {
        background-color: ${c_NEON_TEAL};
        border-color: ${c_NEON_TEAL};
        color: ${c_TEXT_DARK};
      }

      @media (max-width: 860px) {
        button {
          ${buttonWidth ? `width: ${buttonWidth};` : ''}
          margin-bottom: 2rem;
          ${mobileSize ? `font-size: ${mobileSize};` : ''}
        }
      }
    `}</style>
  </>
)
Text.propTypes = {
  connect: PropTypes.string,
  children: PropTypes.node,
  border_color: PropTypes.string,
  background: PropTypes.string,
  margin_left: PropTypes.string,
  buttonWidth: PropTypes.string,
  mobileSize: PropTypes.string,
}

export default StyledLink
