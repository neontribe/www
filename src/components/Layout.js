import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'normalize.css'

import Header from './Header'

const Footer = () => <div style={{ backgroundColor: 'red', height: 150 }} />

const Page = ({ title, children }) => (
  <>
    <div className="page-layout">
      <Header siteTitle={title} />
      <main role="main">{children}</main>
      <Footer />

      <style jsx>{`
        .page-layout {
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1 0 auto;
        }
      `}</style>
    </div>
  </>
)

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

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
