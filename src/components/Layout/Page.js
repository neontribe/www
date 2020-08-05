import React from 'react'
import PropTypes from 'prop-types'

import CookieConsentBanner from '../CookieConsentBanner'
import Header from '../Header'
import Footer from '../Footer'

import VerticalSpacing from '../VerticalSpacing'

const Page = ({ title, children }) => (
  <div className="page-layout">
    <CookieConsentBanner />

    <Header siteTitle={title} />

    <VerticalSpacing size={12} />

    <main role="main">{children}</main>

    <VerticalSpacing size={8} />

    <Footer />

    <VerticalSpacing size={8} />

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
)

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Page
