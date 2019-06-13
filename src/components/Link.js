import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import Text from './Text'

import css from 'styled-jsx/css'

const { className, styles } = css.resolve`
  a {
    text-decoration: none;
  }
`

const Link = ({ type, alternate, transparent, children, ...linkProps }) => (
  <GatsbyLink {...linkProps} className={className}>
    <Text
      heavy
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

const ExternalLink = ({
  type,
  alternate,
  transparent,
  children,
  ...linkProps
}) => (
  <a {...linkProps} className={className}>
    <Text
      heavy
      type={type}
      alternate={alternate}
      transparent={transparent}
      children={children}
    />
    {styles}
  </a>
)

ExternalLink.propTypes = {
  ...Text.propTypes,
  href: PropTypes.string,
}

export { ExternalLink }

export default Link
