import React from 'react'
import PropTypes from 'prop-types'
import { c_TEXT_DARK } from '../../theme'
import Header from '../Header'
import Footer from '../Footer'

import VerticalSpacing from '../VerticalSpacing'

const Page = ({ title, children }) => (
  <div className="page-layout">
    <div className="introduction">
      <Header siteTitle={title} />

      <VerticalSpacing size={5} />
    </div>

    <main role="main">{children}</main>

    <Footer />

    <style jsx>{`
      .page-layout {
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }

      .introduction {
        background-color: ${c_TEXT_DARK};
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
