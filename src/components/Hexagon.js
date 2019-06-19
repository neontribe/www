import React from 'react'
import PropTypes from 'prop-types'

let id = 0
const nextId = () => `image-bg-${id++}`

const Hexagon = ({ src, bgColour, size, title }) => {
  const id = nextId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100%"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
    >
      {title && <title>{title}</title>}
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          height="300"
          width="300"
          patternUnits="userSpaceOnUse"
        >
          <rect
            className="hex-background"
            x="0"
            y="0"
            height="300"
            width="300"
          ></rect>
          {src && (
            <image
              x={`${(100 - size) / 2}%`}
              y={`${(100 - size) / 2}%`}
              width={`${size}%`}
              height={`${size}%`}
              href={src}
            />
          )}
        </pattern>
      </defs>
      <polygon
        className="hex"
        points="280,75 150,0 20,75 20,225 150,300 280,225"
        fill={`url('#${id}')`}
      ></polygon>
      <style jsx>{`
        .hex-background {
          fill: ${bgColour};
        }
      `}</style>
    </svg>
  )
}

Hexagon.propTypes = {
  src: PropTypes.string,
  bgColour: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
}

Hexagon.defaultProps = {
  bgColour: '#fff',
  size: 100,
}

export default Hexagon
