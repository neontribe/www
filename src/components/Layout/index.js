import React from 'react'
import PropTypes from 'prop-types'
import Page from './Page'
import {
  REM_PX,
  c_PRIMARY_TEXT,
  c_PRIMARY_BACKGROUND,
  FONT_STACK,
} from '../../theme'

const Layout = ({ children }) => (
  <>
    <style jsx global>{`
      @font-face {
        font-family: 'Renner*';
        src: url('/fonts/Renner-it-Bold.woff2') format('woff2'),
          url('/fonts/Renner-it-Bold.woff') format('woff');
        font-weight: 700;
        font-display: swap;
      }

      @font-face {
        font-family: 'Renner*';
        src: url('/fonts/Renner-it-Book.woff2') format('woff2'),
          url('/fonts/Renner-it-Book.woff') format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Renner*';
        src: url('/fonts/Renner-it-BookItalic.woff2') format('woff2'),
          url('/fonts/Renner-it-BookItalic.woff') format('woff');
        font-weight: 400;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: 'Renner*';
        src: url('/fonts/Renner-it-Medium.woff2') format('woff2'),
          url('/fonts/Renner-it-Medium.woff') format('woff');
        font-weight: 500;
        font-display: swap;
      }

      html,
      body,
      body > div,
      body > div > div {
        height: 100%;
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html {
        font-size: ${REM_PX}px;
      }

      body {
        background-color: ${c_PRIMARY_BACKGROUND};
        font-family: ${FONT_STACK};
        color: ${c_PRIMARY_TEXT};
      }

      address {
        font-style: normal;
      }
    `}</style>
    <Page>{children}</Page>
  </>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
