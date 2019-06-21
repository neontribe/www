import React from 'react'
import PropTypes from 'prop-types'
import { fontSizes } from '../theme'

const Heading = ({ level, children, size }) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className={`heading`}>
      {children}
      <style jsx>{`
        .heading {
          padding: 0;
          margin: 0;
          font-size: ${fontSizes[size]};
          font-weight: normal;
        }
      `}</style>
    </HeadingTag>
  )
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node,
  // TODO make a single source of truth for the font size, should be the Text component
  size: PropTypes.oneOf(Object.keys(fontSizes)).isRequired,
}

export default Heading
