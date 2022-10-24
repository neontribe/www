import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import arcs from './arcs.svg'

const HeadingContext = createContext(2)

const H = ({ withArcs, ...props }) => {
  const headingLevel = useContext(HeadingContext)
  const Heading = 'h' + Math.min(headingLevel, 6)

  const className = classNames('heading', {
    'with-arcs': withArcs,
  })

  return (
    <>
      <div>
        <Heading className={className} {...props} />
      </div>

      <style jsx>{`
        .heading {
          display: inline-flex;
          align-items: center;
          line-height: 1.5;
        }

        .with-arcs:before {
          content: '';
          display: block;
          background-image: url('${arcs}');
          background-position: left center;
          background-repeat: no-repeat;
          height: 2rem;
          width: 2rem;
          margin-right: 1.5rem;
        }

        @media (max-width: 860px) {
          .heading {
            line-height: 1.2;
          }
        }
      `}</style>
    </>
  )
}

H.propTypes = {
  withArcs: PropTypes.bool,
}

export { HeadingContext }
export default H
