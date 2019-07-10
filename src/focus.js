import React from 'react'
import css from 'styled-jsx/css'
import { c_NEONS } from './theme'

let count = 0

const generateFocus = num => {
  if (typeof num !== 'number') {
    num = count++
  }

  return {
    ...css.resolve`
      button:focus,
      *[href]:focus,
      input:focus,
      select:focus,
      textarea:focus,
      *[tabindex]:not([tabindex='-1']):focus {
        position: relative;
        display: inline-block;
        outline: none;
      }

      button:focus::before,
      *[href]:focus::before,
      input:focus::before,
      select:focus::before,
      textarea:focus::before,
      *[tabindex]:not([tabindex='-1']):focus::before {
        border: 1px solid white;
        outline: 2px solid ${c_NEONS[num % c_NEONS.length]};
        box-shadow: ${c_NEONS[num % c_NEONS.length]} 0px 0px 9px;
        content: '';
        position: absolute;
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    `,
    newNum: num,
  }
}

const useFocusStyles = () => {
  const [num, setNum] = React.useState()

  const { className, styles, newNum } = generateFocus(num)

  React.useEffect(() => {
    setNum(newNum)
  }, [newNum])

  return {
    className,
    styles,
  }
}

export default useFocusStyles
