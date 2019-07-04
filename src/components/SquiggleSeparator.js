import React from 'react'
import Squiggle from './Squiggle'
import VerticalSpacing from './VerticalSpacing'

import { c_NEONS } from '../theme'

export default ({ color = c_NEONS[0], repeats = 5 }) => (
  <div className="squiggle-separator">
    <VerticalSpacing size={10} />
    <Squiggle color={color} repeats={repeats} />
    <VerticalSpacing size={10} />

    <style jsx>{`
      .squiggle-separator {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </div>
)
