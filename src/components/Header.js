// To do:
// Make the mobile bar look good
// Do logic to show one or the other depending on window size

import React, { useState, useEffect } from 'react'
import css from 'styled-jsx/css'

import { breakpoint, c_NAV_ACTIVE, FONT_SECONDARY } from '../theme'
import { InternalLink } from './Link'
import Text from './Text'
import ConstrainedWidth from './Layout/ConstrainedWidth'

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

const DesktopNav = () => {
  return (
    <nav className="nav">
      <ul className="list">
        <li>
          <NavLink active to="/what-we-are-doing">
            Our Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/the-tribe">The tribe</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
      </ul>

      <style jsx>{`
        
        .nav {
          display:flex;
        }
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


        @media (min-width:500px) and (max-width:700px) {
          .list {
          justify-content:flex-start;
          
        }
      `}</style>
    </nav>
  )
}

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="testing">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#8801;
      </button>
      <nav className="mobile-nav">
        {isOpen && (
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
              <NavLink to="/contact-us">Contact</NavLink>
            </li>
          </ul>
        )}
      </nav>

      <style jsx>{`
        .testing {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          left: 1.5rem;
          width: 89%;
          position: absolute;
          align-items: center;
          height: 100%;
          z-index: 1;
        }

        li:not(:first-child) {
          padding-top: 3rem;
        }

        .list {
          background-color: black;
          border: solid;
          border-width: 2px;
          border-color: white;
          display: flex;
          flex-direction: column;
          height: 92%;
          align-items: center;
          justify-content: flex-start;
          padding-top: 50%;
          width: 100%;
          list-style: none;
          padding-inline-start: 0;
        }

        .mobile-nav {
          width: 100%;
          margin-right: 0.2rem;
          height: 100%;
          max-height: 100%;
        }

        .hamburger {
          background: none;
          color: white;
          border: none;
          font-size: 3rem;
          margin: 0;
          padding: 0;
          display: flex;
          align-self: flex-end;
        }
      `}</style>
    </div>
  )
}
const isBrowser = typeof window !== 'undefined'
const Header = () => {
  // Hook to detect screen size and returns true if screen is a desktop/tablet size and false if it is a mobile

  function checkScreenWidth() {
    if (isBrowser) {
      return window.innerWidth
    }
  }

  const [windowSize, setWindowSize] = useState(checkScreenWidth())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(checkScreenWidth())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <ConstrainedWidth>
      <header className="header">
        <div className="logo-container">
          <InternalLink to="/" title="Link to Neontribe homepage">
            <img className="logo" src={logo} alt="Neontribe" />
          </InternalLink>
        </div>
        {windowSize > 500 && <DesktopNav />}
        {windowSize < 500 && <MobileNav />}
      </header>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          margin: 1rem -1rem 0;
          font-family: ${FONT_SECONDARY};
        }

        @media (max-width: 700px) and (min-width: 500px) {
          .header {
            display: block;
          }
        }

        .logo-container {
          height: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .logo {
          height: 2rem;
        }
      `}</style>
    </ConstrainedWidth>
  )
}

export default Header
