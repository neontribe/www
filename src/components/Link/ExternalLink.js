import React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'
import { className, styles } from './styles'
import Arrow from './Arrow'

const ExternalLink = ({
  button,
  type,
  alternate,
  transparent = button,
  children,
  ...linkProps
}) => (
  <a {...linkProps} className={`${className} ${button ? 'button' : ''}`}>
    <Text heavy type={type} alternate={alternate} transparent={transparent}>
      {children}
      {button && <Arrow />}
    </Text>
    {styles}
  </a>
)

ExternalLink.propTypes = {
  ...Text.propTypes,
  href: PropTypes.string.isRequired,
  button: PropTypes.bool,
}

export default ExternalLink
