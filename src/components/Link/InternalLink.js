import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import classNames from 'classnames'

import Text from '../Text'
import { className as resolveClassName, styles } from './styles'
import Arrow from './Arrow'

const InternalLink = ({
  button,
  type,
  alternate,
  // If we're rendering a link that should look like a button,
  // the background colour will be driven by anchor
  transparent = button,
  children,
  className,
  ...linkProps
}) => (
  <GatsbyLink
    {...linkProps}
    className={classNames(resolveClassName, className, button && 'button')}
  >
    {children}
    {styles}
  </GatsbyLink>
)

InternalLink.propTypes = {
  ...GatsbyLink.propTypes,
  ...Text.propTypes,
  button: PropTypes.bool,
}

export default InternalLink
