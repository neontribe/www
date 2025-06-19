import React from 'react'

import ConstrainedWidth from '../Layout/ConstrainedWidth'
import Text from '../Text'
import logo from '../logo.svg'
import { c_NEON_PURPLE } from '../../theme'

const Footer = () => (
  <footer className="footer-container">
    <ConstrainedWidth paddingTop="2rem">
      <div className="flex-container">
        <div>
          {' '}
          <img className="logo" src={logo} alt="Neontribe" />{' '}
        </div>
        <Text size="normal">
          <a href="/privacy-policy">Privacy policy</a>
        </Text>
      </div>
    </ConstrainedWidth>

    <style jsx>{`
      .footer-container {
        width: 100%;
        background-color: ${c_NEON_PURPLE};
      }

      .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        height: 1.5rem;
      }
    `}</style>
  </footer>
)

export default Footer
