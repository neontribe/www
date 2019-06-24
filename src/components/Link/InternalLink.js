import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import classNames from 'classnames'

import { className, styles, LinkInternals } from './shared'

const InternalLink = ({ button, children, ...linkProps }) => (
  <GatsbyLink
    {...linkProps}
    className={classNames(resolveClassName, className, button && 'button')}
  >
    <LinkInternals button={button}>{children}</LinkInternals>
    {styles}
  </GatsbyLink>
)

InternalLink.propTypes = {
  ...GatsbyLink.propTypes,
  button: PropTypes.bool,
}

export default InternalLink
