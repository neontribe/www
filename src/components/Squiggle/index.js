import React from 'react'

const SQUIGGLE_WIDTH = 18
const SQUIGGLE_HEIGHT = (SQUIGGLE_WIDTH / 3) * 2

const Squiggle = ({ color, repeats }) => (
  <>
    <hr className="squiggle" />
    <style jsx>{`
      .squiggle {
        display: block;
        width: ${repeats * SQUIGGLE_WIDTH}px;
        border: 0;
        text-align: center;
        height: 50px;
        transform: rotate(180deg);
        background-position-x: 0;
        background-position-y: center;
        background-repeat: repeat-x;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='100%25' height='8px' viewBox='0 0 9 6' enable-background='new 0 0 9 6' xml:space='preserve'%3e%3cpolygon stroke='%23fb37f1' points='4.5,4.5 0,0 0,1.208 4.5,5.708 9,1.208 9,0 '/%3e%3c/svg%3e");
        background-size: 12px 12px;
      }
    `}</style>
  </>
)

export default Squiggle
