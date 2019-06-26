import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ level, children }) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className="heading">
      {children}
      <style jsx>{`
        .heading {
          padding: 0;
          margin: 0;
          font-weight: normal;
        }
      `}</style>
    </HeadingTag>
  )
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node,
}

export default Heading
