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
        background-image: url('data:image/svg+xml;utf-8,<?xml version="1.0" encoding="UTF-8"?>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="${SQUIGGLE_HEIGHT}px" width="${SQUIGGLE_WIDTH}px" viewBox="0 0 9 6" enable-background="new 0 0 9 6" xml:space="preserve">
          <polygon stroke="${encodeURIComponent(
            color
          )}" points="4.5,4.5 0,0 0,1.208 4.5,5.708 9,1.208 9,0 "/>
        </svg>');
      }
    `}</style>
  </>
)

export default Squiggle
