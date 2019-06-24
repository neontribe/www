// styled-jsx uses React for the resolve tag
import React from 'react' // eslint-disable-line no-unused-vars
import css from 'styled-jsx/css'
import { COLOUR_CALL_TO_ACTION } from '../../theme'

export const { className, styles } = css.resolve`
  a {
    vertical-align: middle;
    color: inherit;
  }

  a.button {
    display: inline-block;
    padding: 1rem 1.5rem;
    text-decoration: none;
    font-weight: bold;
    background-color: ${COLOUR_CALL_TO_ACTION};
    display: inline-flex;
  }

  a.button::after {
    content: '➝';
    margin-left: 1rem;
    transition: transform 0.1s ease-in-out;
  }

  a.button:hover::after {
    transform: translateX(5px);
  }
`
