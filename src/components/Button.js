import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import css from 'styled-jsx/css'
import Text from './Text'

import { navigate as NavTrial } from 'gatsby'

const StyledLink = ({ border_color, connect, background, margin_left }) => (
  <>
    <button
      onClick={() => {
        NavTrial(connect)
      }}
    >
      See our work
    </button>
    <style jsx>{`
      button {
        vertical-align: middle;
        padding: 0.5rem 2rem;
        ${background ? `background-color: ${background};` : ''}
        border-radius: 350px;

        cursor: pointer;
        width: 15rem;
        height: 3rem;
        text-align: center;
        border-style: solid;
        color: white;
        ${border_color ? `border-color: ${border_color};` : ''}
        font-weight:700;
        padding-bottom: 2rem;
        ${margin_left ? `margin-left: ${margin_left};` : ''}
        font-size:1.25rem;
        font-family: KeepCalm, sans-serif;
      }
    `}</style>
  </>
)
Text.propTypes = {
  connect: PropTypes.string,
  border_color: PropTypes.string,
  background: PropTypes.string,
  margin_left: PropTypes.string,
}

export default StyledLink
