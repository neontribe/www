import React from 'react'
import css from 'styled-jsx/css'

import {
  c_PRIMARY_BACKGROUND,
  c_CALL_TO_ACTION,
  c_PRIMARY_TEXT,
} from '../../theme'
import Text from '../Text'
import Arrow from './Arrow'

export const { className, styles } = css.resolve`
  a {
    text-decoration: none;
  }

  a.button {
    vertical-align: middle;
    display: inline-block;
    padding: 1rem 2rem;
    background-color: ${c_CALL_TO_ACTION};
    box-shadow: 0 0 3px 3px ${c_PRIMARY_BACKGROUND};
  }
`

export const LinkInternals = ({ button, children }) => {
  if (button) {
    return (
      <Text weight={500} size="medium" type="primary" transparent>
        {children}
        <Arrow />
      </Text>
    )
  }

  return children
}
