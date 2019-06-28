import React from 'react'
import PropTypes from 'prop-types'
import Malarquee from 'react-malarquee'

const makeArrayOfLength = len => Array.apply(null, Array(len))
const HexagonGrid = ({ hexgonWidth, rows, rate, ...props }) => {
  const children = React.Children.toArray(props.children)
  const childCount = children.length

  return (
    <React.Fragment>
      <Malarquee
        fill
        hoverToPause
        rate={typeof rate === 'number' ? rate : undefined}
      >
        {makeArrayOfLength(rows).map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {makeArrayOfLength(childCount).map((item, columnIndex) => {
              const isAlternateRow = rowIndex % 2 !== 0

              let childIndex = columnIndex % childCount
              if (isAlternateRow) {
                // offset the start index of alternate rows by half the length of the children count
                childIndex = Math.abs(
                  (childCount + (columnIndex - Math.round(childCount / 2))) %
                    childCount
                )
              }

              return (
                <div
                  key={columnIndex}
                  className="column"
                  children={children[childIndex]}
                />
              )
            })}
          </div>
        ))}
      </Malarquee>

      <style jsx>{`
        .row {
          display: flex;
        }

        .row:nth-child(even) {
          position: relative;
          left: -${hexgonWidth / 2}px;
        }

        .row + .row {
          margin-top: -20px;
        }

        .column {
          flex: 0 0 auto;
          width: ${hexgonWidth}px;
        }
      `}</style>
    </React.Fragment>
  )
}

HexagonGrid.propTypes = {
  children: PropTypes.node.isRequired,
  // children: PropTypes.arrayOf(PropTypes.instanceOf(Hexagon)).isRequired,
  hexgonWidth: PropTypes.number,
  rows: PropTypes.number,
  rate: PropTypes.number,
}

HexagonGrid.defaultProps = {
  hexgonWidth: 150,
  rows: 1,
}

export default HexagonGrid
