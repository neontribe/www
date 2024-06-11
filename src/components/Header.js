import React, { useState, useEffect } from 'react';
import css from 'styled-jsx/css';

import { c_NAV_ACTIVE, FONT_SECONDARY, c_TEXT_DARK } from '../theme';
import { InternalLink } from './Link';
import Text from './Text';
import ConstrainedWidth from './Layout/ConstrainedWidth';
import VerticalSpacing from '../components/VerticalSpacing';
import logo from './logo.svg';
import classNames from 'classnames';

const activeLinkStyles = css.resolve`
  a {
    border-bottom: 4px solid ${c_NAV_ACTIVE};
    color: #48e9ce;
  }
`;

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
);

const DesktopNav = () => {
  return (
    <nav className="nav">
      <ul className="list">
        <li>
          <NavLink active to="/our-work">
            Our work
          </NavLink>
        </li>
        <li>
          <NavLink to="/the-tribe">The team</NavLink>
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
  );
};

const isBrowser = typeof window !== 'undefined';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Hook to detect screen size and returns true if screen is a desktop/tablet size and false if it is a mobile

  function checkScreenWidth() {
    if (isBrowser) {
      return window.innerWidth;
    }
  }

  const [windowSize, setWindowSize] = useState(checkScreenWidth());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(checkScreenWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="header-container">
      <ConstrainedWidth>
        <header className="header">
          <div className="logo-container">
            <InternalLink to="/" title="Link to Neontribe homepage">
              <img className="logo" src={logo} alt="Neontribe" />
            </InternalLink>
          </div>
          {windowSize > 500 && <DesktopNav />}
          {windowSize <= 500 && (
            <>
              <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
                aria-expanded={isOpen}
                aria-controls={isOpen ? 'menu' : null}
              >
                &#8801;
              </button>
              {isOpen && (
                <div className="hamburger-menu-container" id="menu">
                  <nav className="mobile-nav">
                    <ul
                      className={classNames(
                        'list',
                        windowSize <= 500 && 'z-value'
                      )}
                    >
                      <li className="first-item">
                        <NavLink active to="/our-work">
                          Our Work
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/the-tribe">The team</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact-us">Contact</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </>
          )}
        </header>
      </ConstrainedWidth>
      <VerticalSpacing size={5} />
      <style jsx>{`
        .header-container {
          background-color: ${c_TEXT_DARK};
        }

        .z-value {
          z-index: 2;
        }

        .header {
          display: flex;
          justify-content: space-between;
          margin: 1rem -1rem 0;
          font-family: ${FONT_SECONDARY};
        }

        @media (max-width: 700px) and (min-width: 501px) {
          .header {
            display: block;
          }
        }

        .logo-container {
          height: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 3;
        }

        .logo {
          height: 2rem;
        }

        .hamburger-menu-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          left: 0.1rem;

          width: 100%;
          position: absolute;
          align-items: center;
          height: 100%;
        }

        li:not(:first-child) {
          padding-top: 3rem;
        }

        .list {
          background-color: ${c_TEXT_DARK};
          padding-right: 2rem;

          position: relative;

          display: flex;
          flex-direction: column;
          height: 100%;
          align-items: center;
          justify-content: flex-start;
          padding-top: 50%;
          width: 100%;
          list-style: none;
        }

        .mobile-nav {
          width: 100%;
          margin-right: 0.2rem;
          height: 100%;
          max-height: 100%;
        }

        .hamburger {
          align-self: flex-end;
          background: none;
          border: none;
          color: white;
          display: flex;
          font-size: 3rem;
          margin: 0;
          z-index: 5;
        }
      `}</style>
    </div>
  );
};

export default Header;
