import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Page from './Page'
import { REM_PX, COLOUR_PRIMARY_BACKGROUND, FONT_STACK } from '../../theme'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <style jsx global>{`
          @font-face {
            font-family: 'Renner*';
            src: url('/fonts/Renner-it-Bold.woff2') format('woff2'),
              url('/fonts/Renner-it-Bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
          }

          @font-face {
            font-family: 'Renner*';
            src: url('/fonts/Renner-it-BookItalic.woff2') format('woff2'),
              url('/fonts/Renner-it-BookItalic.woff') format('woff');
            font-weight: normal;
            font-style: italic;
          }

          @font-face {
            font-family: 'Renner*';
            src: url('/fonts/Renner-it-BoldItalic.woff2') format('woff2'),
              url('/fonts/Renner-it-BoldItalic.woff') format('woff');
            font-weight: bold;
            font-style: italic;
          }

          @font-face {
            font-family: 'Renner*';
            src: url('/fonts/Renner-it-Book.woff2') format('woff2'),
              url('/fonts/Renner-it-Book.woff') format('woff');
            font-weight: normal;
            font-style: normal;
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

          body {
            background-color: ${COLOUR_PRIMARY_BACKGROUND};
            font-size: ${REM_PX}px;
            font-family: ${FONT_STACK};
          }
        `}</style>
        <Page title={data.site.siteMetadata.title}>{children}</Page>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
