import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

import Text from '../Text'
import { className, styles } from './styles'
import Arrow from './Arrow'

const InternalLink = ({
  button,
  type,
  alternate,
  // If we're rendering a link that should look like a button,
  // the background colour will be driven by anchor
  transparent = button,
  children,
  ...linkProps
}) => (
  <GatsbyLink
    {...linkProps}
    className={`${className} ${button ? 'button' : ''}`}
  >
    <Text heavy type={type} alternate={alternate} transparent={transparent}>
      {children}
      {button && <Arrow />}
    </Text>
    {styles}
  </GatsbyLink>
)

InternalLink.propTypes = {
  ...GatsbyLink.propTypes,
  ...Text.propTypes,
  button: PropTypes.bool,
}

export default InternalLink
