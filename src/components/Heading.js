import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ level, children, size }) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className={`heading ${size}`}>
      {children}
      <style jsx>{`
        .heading {
          padding: 0;
          margin: 0;
        }

        .small {
          font-size: 1.25rem;
        }
        .medium {
          font-size: 1.5rem;
        }
        .large {
          font-size: 2rem;
        }
      `}</style>
    </HeadingTag>
  )
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
}

export default Heading
