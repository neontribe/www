import React from 'react'
import PropTypes from 'prop-types'

import { className, styles, LinkInternals } from './shared'

const ExternalLink = ({ button, children, ...linkProps }) => (
  <a {...linkProps} className={`${className} ${button ? 'button' : ''}`}>
    <LinkInternals button={button}>{children}</LinkInternals>
    {styles}
  </a>
)

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  button: PropTypes.bool,
}

export default ExternalLink
