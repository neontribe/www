import React, { useState } from 'react'
import css from 'styled-jsx/css'

import { breakpoint, c_NAV_ACTIVE, FONT_SECONDARY } from '../theme'
import { InternalLink } from './Link'
import Text from './Text'
import ConstrainedWidth from './Layout/ConstrainedWidth'
import { ExternalLink } from './Link'
import classNames from 'classnames'
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

const Nav = ({ isOpen }) => (
  <>
    <nav className={classNames('nav', !isOpen && 'hidden')}>
      <ul className="list">
        <li className="first-item">
          <NavLink active to="/what-we-are-doing">
            Our Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/the-tribe">The tribe</NavLink>
        </li>

        <li>
          <NavLink to="/blog">Our blog</NavLink>
        </li>

        <li>
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
      </ul>

      <style jsx>{`
        .list {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;
          flex-direction: row;
          width: auto;

          list-style: none;

          font-size: 20px;
        }

        .list > * + * {
          margin-top: 0;
          margin-left: 3rem;
        }

        .hamburger {
          display: none;
          curser: pointer;
        }

        @media (max-width: 500px) {
          .hamburger {
            display: block;
          }

          .list {
            color: white;
            position: absolute;
            left: 0;
            margin-left: 1rem;
            top: 100px;
            flex-direction: column;
            justify-content: space-between;
            width: 93%;
            text-align: center;
            gap: 0;
            background-color: #5600ee;
          }

          .list > * + * {
            margin-top: 0;
            margin-left: 0;
          }

          .hidden {
            display: none;
          }
        }
      `}</style>
    </nav>
  </>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ConstrainedWidth>
      <header className="header">
        <div>
          <InternalLink to="/" title="Link to Neontribe homepage">
            <img className="logo" src={logo} alt="Neontribe" />
          </InternalLink>
        </div>

        <div className="nav-wrapper">
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <Nav isOpen={isOpen} />
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

        .bar {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px auto;
          background-color: white;
          -webkit-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
        }

        .hamburger {
          display: none;
        }

        @media (min-width: 300px) {
          .header {
            align-items: flex-end;
            justify-content: space-between;
          }
        }

        @media (max-width: 500px) {
          .hamburger {
            display: contents;
          }
        }

        .header > * {
          flex-grow: 0;
          flex-direction: column;
          align-items: flex-start;
        }
      `}</style>
    </ConstrainedWidth>
  )
}

export default Header
