import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

import Logo from './Logo'
import Link from './Link'
import ConstrainedWidth from './Layout/ConstrainedWidth'

const Nav = () => (
  <nav className="nav">
    <ul className="list">
      <li>
        <Link to="/">fooooooooooo</Link>
      </li>
      <li>
        <Link to="/">foo</Link>
      </li>
      <li>
        <Link to="/">foo</Link>
      </li>
    </ul>

    <style jsx>{`
      .nav {
        display: flex;
      }

      .list {
        padding: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        list-style: none;
      }

      .list li + li {
        margin-left: 2rem;
      }
    `}</style>
  </nav>
)

const Header = ({ siteTitle }) => (
  <ConstrainedWidth>
    <div className="header">
      <div>
        <GatsbyLink to="/" title={`Link to ${siteTitle} homepage`}>
          <Logo />
        </GatsbyLink>
      </div>
      <Nav />
    </div>
    <style jsx>{`
      .header {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
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
