import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Text from '../Text'
import { className as resolveClassName, styles } from './styles'
import Arrow from './Arrow'

const ExternalLink = ({
  button,
  type,
  alternate,
  transparent = button,
  children,
  className,
  ...linkProps
}) => (
  <a
    {...linkProps}
    className={classNames(resolveClassName, className, button && 'button')}
  >
    {children}
    {styles}
  </a>
)

ExternalLink.propTypes = {
  ...Text.propTypes,
  href: PropTypes.string.isRequired,
  button: PropTypes.bool,
}

export default ExternalLink
