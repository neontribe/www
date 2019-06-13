import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

import Logo from './Logo'
import Link from './Link'
import ConstrainedWidth from './Layout/ConstrainedWidth'

const Nav = () => (
  <nav className="nav">
    <Link to="/">foo</Link>
    <Link to="/">foo</Link>
    <Link to="/">foo</Link>

    <style jsx>{`
      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </nav>
)

const Header = ({ siteTitle }) => (
  <ConstrainedWidth>
    <div className="header">
      <GatsbyLink to="/" title={`Link to ${siteTitle} homepage`}>
        <Logo />
      </GatsbyLink>
      <Nav />
    </div>
    <style jsx>{`
      .header {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
      }
    `}</style>
  </ConstrainedWidth>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
