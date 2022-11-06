import React from 'react'
import PropTypes from 'prop-types'
import Page from './Page'
import {
  REM_PX,
  c_TEXT_LIGHT,
  FONT_PRIMARY,
  FONT_SECONDARY,
  FONT_PRIMARY_BOLD,
} from '../../theme'

const Layout = ({ children }) => (
  <>
    <style jsx global>{`
      @font-face {
        font-family: 'Muli';
        src: url('/fonts/muli-light-webfont.woff2') format('woff2'),
          url('/fonts/muli-light-webfont.woff') format('woff');
        font-display: swap;
      }

      @font-face {
        font-family: 'KeepCalm';
        src: url('/fonts/keepcalmmedium-webfont.woff2') format('woff2'),
          url('/fonts/keepcalmmedium-webfont.woff') format('woff');
        font-display: swap;
      }

      @font-face {
        font-family: 'KeepCalm';
        ///src: url('/fonts/keepcalmmediumitalic.woff2') format('woff2'),
        ///url('/fonts/keepcalmmediumitalic.woff') format('woff');
        font-style: italic;
        font-display: swap;
      }

      html,
      body,
      body > div > div {
        height: 100%;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      *:focus {
        outline: 1px dashed currentColor;
        outline-offset: 5px;
      }

      html {
        font-size: ${REM_PX}px;
        background-color: #f2f2f2;
      }

      body {
        font-family: ${FONT_PRIMARY};
        color: ${c_TEXT_LIGHT};
        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      p {
        margin: 0;
        line-height: 1;
      }

      p + p {
        margin-top: 1em;
      }

      address {
        font-style: normal;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 0;
      }

      h1,
      h2 {
        font: inherit;
        font-weight: normal;
        font-family: ${FONT_SECONDARY};
      }

      h3,
      h4,
      h5,
      h6 {
        font: inherit;

        font-weight: 700;

        font-family: ${FONT_PRIMARY_BOLD};
      }
    `}</style>

    <Page>{children}</Page>
  </>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
