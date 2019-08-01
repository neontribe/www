import React from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'

import CookieConsentBanner from '../CookieConsentBanner'
import Header from '../Header'
import Footer from '../Footer'

import hexagonsLeft from './hexagons-left.png'
import hexagonsRight from './hexagons-right.png'
import VerticalSpacing from '../VerticalSpacing'

const Page = ({ title, children }) => (
  <div className="page-layout">
    <Header siteTitle={title} />

    <VerticalSpacing size={10} />

    <main role="main">{children}</main>

    <VerticalSpacing size={10} />

    <Footer />

    <CookieConsentBanner />

    <style jsx>{`
      .page-layout {
        min-height: 100%;
        display: flex;
        flex-direction: column;

        background-image: url('${hexagonsLeft}'), url('${hexagonsRight}');
        background-repeat: repeat-y;
        background-position: top left, top right;
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
