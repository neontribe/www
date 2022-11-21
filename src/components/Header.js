import React from 'react'
import css from 'styled-jsx/css'

import { breakpoint, c_NAV_ACTIVE, FONT_SECONDARY } from '../theme'
import { InternalLink } from './Link'
import Text from './Text'
import ConstrainedWidth from './Layout/ConstrainedWidth'

import logo from './logo.svg'

const activeLinkStyles = css.resolve`
  a {
    border-bottom: 4px solid ${c_NAV_ACTIVE};

    color: #48e9ce;
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
        <NavLink active to="/our-work">
          Our work
        </NavLink>
      </li>
      <li>
        <NavLink to="/the-tribe">The tribe</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact us</NavLink>
      </li>
    </ul>

    <style jsx>{`
      .list {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;
        list-style: none;
        width: 100%;
        font-size: 20px;
      }

      .list > * + * {
        margin-top: 0;
        margin-left: 3rem;
      }

      @media (max-width: 530px) {
        .list {
          flex-direction: column;
          margin: 0;
        }

        .list > * + * {
          margin-top: 0;
          margin-left: 0;
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
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 1rem -1rem 0;
        font-family: ${FONT_SECONDARY};
        width: 100%;
      }

      .header > * {
        display: flex;
        flex: 1 0 auto;

        align-items: center;
        margin: 1rem;
      }

      .nav-wrapper {
        display: flex;
        justify-content: flex-end;
      }

      .logo {
        height: 2rem;
      }

      @media (max-width: 860px) {
        .header {
          display: block;
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
