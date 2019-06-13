import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Text from './Text'

import css from 'styled-jsx/css'

const { className, styles } = css.resolve`
  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.25rem;
  }
`

const Link = ({ type, alternate, transparent, children, ...linkProps }) => (
  <GatsbyLink {...linkProps} className={className}>
    <Text
      type={type}
      alternate={alternate}
      transparent={transparent}
      children={children}
    />
    {styles}
  </GatsbyLink>
)

Link.propTypes = {
  ...GatsbyLink.propTypes,
  ...Text.propTypes,
}

export default Link
