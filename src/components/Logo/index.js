import React from 'react'

import { COLOUR_LOGO_BACKGROUND } from '../../theme'
import Hexagon from '../Hexagon'
import LogoImage from './logo.svg'

export default () => (
  <span className="logo-wrapper">
    <Hexagon bgColour={COLOUR_LOGO_BACKGROUND} size={60} src={LogoImage} />

    <style jsx>{`
      .logo-wrapper {
        display: block;
        height: auto;
        width: 100px;
      }
    `}</style>
  </span>
)
