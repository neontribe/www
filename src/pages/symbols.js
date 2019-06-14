import React from 'react'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Hexagon from '../components/Hexagon'
import Text from '../components/Text'
import logo from '../components/Logo/logo.svg'
import { COLOUR_NEONS } from '../theme'

export default () => (
  <Layout>
    <ConstrainedWidth>
      <h1>
        <Text>Symbols</Text>
      </h1>
      <div className="centered">
        <div className="hex-container">
          <h2>
            <Text>Hexagons</Text>
          </h2>
          <div className="hexagon">
            <Hexagon />
          </div>
          <div className="hexagon">
            <Hexagon src={logo} size={55} />
          </div>
          {COLOUR_NEONS.map(c => (
            <div className="hexagon">
              <Hexagon size={55} bgColour={c} />
            </div>
          ))}
        </div>
      </div>
    </ConstrainedWidth>
    <style jsx>{`
      .hex-container {
        display: flex;
        align-items: center;
      }
      .hexagon {
        height: 100px;
      }
      .centered {
        flex-direction: column;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </Layout>
)
