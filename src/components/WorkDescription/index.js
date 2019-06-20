import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { c_PRIMARY_BACKGROUND } from '../../theme'

import ConstrainedWidth from '../Layout/ConstrainedWidth'
import Heading from '../Heading'
import Text from '../Text'

// Copied from flipcard
const findChild = (children, { displayName }) =>
  Children.toArray(children).find(
    child => child.type.displayName === displayName
  )

const WorkDescription = ({
  alternate,
  level,
  title,
  subtitle,
  problem,
  solution,
}) => (
  <div className="work-description">
    <ConstrainedWidth>
      <div className="work-description-content">
        <Heading level={level} size="small">
          <Text>{title}</Text>
        </Heading>
      </div>
    </ConstrainedWidth>
    <style jsx>{`
      .work-description {
        background-color: ${c_PRIMARY_BACKGROUND};
        width: 100%;
      }
    `}</style>
  </div>
)

WorkDescription.propTypes = {
  alternate: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  // imagePos: PropTypes.oneOf(['left', 'right']), perhaps use alternate?
  title: PropTypes.node,
  subtitle: PropTypes.node,
  problem: PropTypes.node,
  solution: PropTypes.node,
}

export default WorkDescription
