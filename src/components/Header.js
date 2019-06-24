import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import css from 'styled-jsx/css'

import { breakpoint, GUTTER_PX } from '../theme'
import Logo from './Logo'
import Link from './Link'
import ConstrainedWidth from './Layout/ConstrainedWidth'

const { className, styles } = css.resolve`
  a {
    text-decoration: none;
    font-weight: bold;
  }
`

const Nav = () => (
  <nav className="nav">
    <ul className="list">
      <li>
        <Link className={className} to="/">
          fooooooooooo
        </Link>
      </li>
      <li>
        <Link className={className} to="/">
          foo
        </Link>
      </li>
      <li>
        <Link className={className} to="/">
          foo
        </Link>
      </li>
    </ul>
    {styles}
    <style jsx>{`
      .list {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        list-style: none;
        width: 100%;
      }

      .list li + li {
        margin-top: 1rem;
      }

      @media (${breakpoint('sm')}) {
        .list {
          justify-content: space-between;
          flex-direction: row;
          width: auto;
        }

        .list li + li {
          margin-top: 0;
          margin-left: 2rem;
        }
      }
    `}</style>
  </nav>
)

const Header = ({ siteTitle }) => (
  <ConstrainedWidth>
    <header className="header">
      <div className="logo-wrapper">
        <GatsbyLink to="/" title={`Link to ${siteTitle} homepage`}>
          <Logo />
        </GatsbyLink>
      </div>
      <div className="nav-wrapper">
        <Nav />
      </div>
    </header>
    <style jsx>{`
      .header {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 2rem 0;
      }

      .header > * {
        flex: 1 0 auto;
      }

      .logo-wrapper {
        display: flex;
        justify-content: center;
      }

      .nav-wrapper {
        margin: auto 0;
      }

      @media (${breakpoint('sm')}) {
        .header > * {
          flex: initial;
        }
        .logo-wrapper {
          justify-content: normal;
        }
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
