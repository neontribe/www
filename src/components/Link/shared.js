import React from 'react'
import css from 'styled-jsx/css'

import {
  FONT_SECONDARY,
  c_CALL_TO_ACTION,
  c_CALL_TO_ACTION_HOVER,
  c_NEON_TEAL,
} from '../../theme'

import Text from '../Text'

export const { className, styles } = css.resolve`
  a.button {
    vertical-align: middle;
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 60px;
    font-family: ${FONT_SECONDARY};
    background-color: ${c_CALL_TO_ACTION};
    cursor: pointer;
  }

  a.button:hover {
    background-color: ${c_CALL_TO_ACTION_HOVER};
  }

  a:hover {
    color: ${c_NEON_TEAL};
  }
`

export const LinkInternals = ({ button, children }) => {
  if (button) {
    return <Text size="medium">{children}</Text>
  }

  return children
}
