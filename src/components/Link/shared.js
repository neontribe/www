import React from 'react'
import css from 'styled-jsx/css'

import { c_CALL_TO_ACTION } from '../../theme'
import Text from '../Text'
import Arrow from './Arrow'

export const { className, styles } = css.resolve`
  a.button {
    vertical-align: middle;
    text-decoration: none;
    display: inline-block;
    padding: 1rem 2rem;
    background-color: ${c_CALL_TO_ACTION};
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
