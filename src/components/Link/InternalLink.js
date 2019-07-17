import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import classNames from 'classnames'

import { className, styles, LinkInternals } from './shared'

import useFocusStyles from '../../focus'

const InternalLink = ({ button, children, ...linkProps }) => {
  const focusStyle = useFocusStyles()

  return (
    <GatsbyLink
      {...linkProps}
      className={classNames(
        className,
        button && 'button',
        focusStyle.className
      )}
    >
      <LinkInternals button={button}>{children}</LinkInternals>
      {styles}
      {focusStyle.styles}
    </GatsbyLink>
  )
}

InternalLink.propTypes = {
  ...GatsbyLink.propTypes,
  button: PropTypes.bool,
}

export default InternalLink
