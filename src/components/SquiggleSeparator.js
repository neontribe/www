import React from 'react'
import Squiggle from './Squiggle'
import VerticalSpacing from './VerticalSpacing'

export default ({ color, repeats }) => (
  <div>
    <VerticalSpacing size={10} />
    <Squiggle color={color} repeats={repeats} />
    <VerticalSpacing size={10} />
  </div>
)
