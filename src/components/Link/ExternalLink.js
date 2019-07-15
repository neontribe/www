import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useFocusStyles from '../../focus'

import { className, styles, LinkInternals } from './shared'

const ExternalLink = ({ button, children, newTab, ...linkProps }) => {
  const focusStyle = useFocusStyles()

  return (
    <a
      {...linkProps}
      className={classNames(
        className,
        button && 'button',
        focusStyle.className
      )}
      target={newTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      <LinkInternals button={button}>{children}</LinkInternals>
      {styles}
      {focusStyle.styles}
    </a>
  )
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  button: PropTypes.bool,
  newTab: PropTypes.bool,
}

export default ExternalLink
