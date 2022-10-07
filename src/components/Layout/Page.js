import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'

import VerticalSpacing from '../VerticalSpacing'

const Page = ({ title, children }) => (
  <div className="page-layout">
    <div className="introduction">
      <Header siteTitle={title} />

      <VerticalSpacing size={12} />
    </div>
    <main role="main">{children}</main>

    <style jsx>{`
      .page-layout {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
      }

      .introduction {
        background-color: black;
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
