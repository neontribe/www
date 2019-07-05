import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import css from 'styled-jsx/css'

import { breakpoint, c_NAV_ACTIVE } from '../theme'
import Logo from './Logo'
import Link from './Link'
import Text from './Text'
import ConstrainedWidth from './Layout/ConstrainedWidth'
import { ExternalLink } from './Link'

const activeLinkStyles = css.resolve`
  a {
    position: relative;
  }

  a::after {
    content: '';
    position: absolute;
    bottom: -10px;
    display: block;
    height: 8px;
    width: 100%;
    transform: rotate(180deg);
    background: 0 center repeat-x
      url('data:image/svg+xml;utf-8,<?xml version="1.0" encoding="UTF-8"?>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="8px" viewBox="0 0 9 6" enable-background="new 0 0 9 6" xml:space="preserve">
        <polygon stroke="${encodeURIComponent(
          c_NAV_ACTIVE
        )}" points="4.5,4.5 0,0 0,1.208 4.5,5.708 9,1.208 9,0 "/>
    </svg>');
  }
`

const NavLink = ({ children, active, ...props }) => (
  <Link
    {...props}
    activeClassName={activeLinkStyles.className}
    partiallyActive={true}
  >
    <Text lineHeight={2} weight={500}>
      {children}
    </Text>
    {activeLinkStyles.styles}
  </Link>
)

const Nav = () => (
  <nav className="nav">
    <ul className="list">
      <li>
        <NavLink active to="/what-we-are-doing">
          What we're doing
        </NavLink>
      </li>
      <li>
        <NavLink to="/the-tribe">The tribe</NavLink>
      </li>
      <li>
        <ExternalLink href="mailto:hello@neontribe.co.uk">
          <Text lineHeight={2}>hello@neontribe.co.uk</Text>
        </ExternalLink>
      </li>
    </ul>
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

      @media (${breakpoint('md')}) {
        /* Needs to be insync with the breakpoint below */
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

const Header = () => (
  <ConstrainedWidth>
    <header className="header">
      <div className="logo-wrapper">
        <GatsbyLink to="/" title={`Link to Neontribe homepage`}>
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

      @media (${breakpoint('md')}) {
        /* Needs to be insync with the breakpoint above */
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

export default Header
