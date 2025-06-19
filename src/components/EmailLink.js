import React from 'react'
import PropTypes from 'prop-types'
import { c_NEON_TEAL, c_TEXT_DARK } from '../theme'

const EmailLink = ({
  children,
  border_color,
  background_color,
  fontSize = '1.25rem',
  link,
}) => (
  <div>
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>

    <style jsx>{`
      div {
        display: flex;
      }

      a {
        vertical-align: middle;
        padding: 0.5rem 2rem;
        ${background_color ? `background-color: ${background_color};` : ''}
        border-radius: 350px;
        cursor: pointer;
        max-height: 100%;
        text-align: center;
        border-style: solid;
        color: white;
        ${border_color ? `border-color: ${border_color};` : ''}
        ${fontSize ? `font-size: ${fontSize};` : ''}
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

        div {
          justify-content: center;
          width: 100%;
        }
      }

      @media (max-width: 500px) {
        a {
          width: 100vw;
        }
      }
    `}</style>
  </div>
)
EmailLink.propTypes = {
  connect: PropTypes.string,
  link: PropTypes.string.isRequired,
  children: PropTypes.node,
  border_color: PropTypes.string,
  background_color: PropTypes.string,
  fontSize: PropTypes.string,
}

export default EmailLink
