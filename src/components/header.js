import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import logo from '../images/logo.svg'

const Header = ({ siteTitle, siteMenu }) => (
  <header className="header flex justify-between items-center flex-column flex-row-ns tc tl-ns mt4 mb5">
    <div className="fl w-100 w-third-ns mb4 mb0-ns">
      {/* TODO: Import from props */}
      <img className="logo" src={logo} alt="neontribe logo" />
    </div>
    <div className="fl w-100 w-two-thirds-m w-third-l">
      <nav>
        <ul className="list flex justify-center flex-column flex-row-ns flex-wrap ttu nowrap">
          {/* Refactor: take this into a <Menu /> component? */}
          {siteMenu.edges.map(({ node }) => (
            <li key={node.slug}>
              <Link to={node.slug} className="text">
                {node.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="fl w-100 w-two-thirds-m w-third-l tr-ns">
      {/* TODO: Import from props */}
      <a href="mailto:hello@neontribe.co.uk" className="text">
        hello@neontribe.co.uk
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteMenu: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: '',
  siteMenu: [],
}

export default Header
