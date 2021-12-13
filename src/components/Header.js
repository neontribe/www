import React from 'react'
import css from 'styled-jsx/css'

import { breakpoint, c_NAV_ACTIVE, FONT_SECONDARY } from '../theme'
import { InternalLink } from './Link'
import Text from './Text'
import ConstrainedWidth from './Layout/ConstrainedWidth'
import { ExternalLink } from './Link'

import logo from './logo.svg'
import menuActive from './menu-active.svg'

const activeLinkStyles = css.resolve`
  a {
    padding-bottom: 4px;
    border-bottom: 4px solid ${c_NAV_ACTIVE};
  }

  @media (${breakpoint('md')}) {
    a {
      position: relative;
      border-bottom: none;
    }

    a:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -100%;
      margin: auto;
      height: 26px;
      width: 50px;
      background-image: url('${menuActive}');
      background-repeat: no-repeat;
    }
  }
`

const NavLink = ({ children, active, ...props }) => (
  <Text lineHeight={2}>
    <InternalLink
      {...props}
      activeClassName={activeLinkStyles.className}
      partiallyActive={true}
      children={children}
    />

    {activeLinkStyles.styles}
  </Text>
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
          hello@neontribe.co.uk
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

      .list > * + * {
        margin-top: 1rem;
      }

      @media (${breakpoint('md')}) {
        /* Needs to be insync with the breakpoint below */
        .list {
          justify-content: space-between;
          flex-direction: row;
          width: auto;
        }

        .list > * + * {
          margin-top: 0;
          margin-left: 3rem;
        }
      }
    `}</style>
  </nav>
)

const Header = () => (
  <ConstrainedWidth>
    <header className="header">
      <div>
        <InternalLink to="/" title="Link to Neontribe homepage">
          <img className="logo" src={logo} alt="Neontribe" />
        </InternalLink>
      </div>

      <div className="nav-wrapper">
        <Nav />
      </div>
    </header>

    <style jsx>{`
      .header {
        display: flex;
        flex-wrap: wrap;
        margin: 1rem -1rem 0;
        font-family: ${FONT_SECONDARY};
      }

      .header > * {
        display: flex;
        flex: 1 0 auto;
        justify-content: center;
        align-items: center;
        margin: 1rem;
      }

      .logo {
        height: 2rem;
      }

      @media (${breakpoint('lg')}) {
        .header {
          align-items: flex-end;
          justify-content: space-between;
        }

        .header > * {
          flex-grow: 0;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    `}</style>
  </ConstrainedWidth>
)

export default Header
