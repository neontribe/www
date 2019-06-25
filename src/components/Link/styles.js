// styled-jsx uses React for the resolve tag
import React from 'react' // eslint-disable-line no-unused-vars
import css from 'styled-jsx/css'
import { c_CALL_TO_ACTION } from '../../theme'

export const { className, styles } = css.resolve`
  a {
    text-decoration: none;
    vertical-align: middle;
  }

  a.button {
    display: inline-block;
    padding: 10px;
    background-color: ${c_CALL_TO_ACTION};
  }
`
