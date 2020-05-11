import React from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'

import {
  c_PRIMARY_TEXT,
  c_PRIMARY_BACKGROUND_ALTERNATIVE,
  c_PRIMARY_BACKGROUND,
} from '../theme'

const Button = ({ onClick, className, children, open }) => (
  <button type="button" onClick={onClick} className={className}>
    {children}
  </button>
)

const ACCEPTANCE_COOKIE = 'neontribe-cookies-accept'
const NEONTRIBE_GA = 'UA-000000-01'

const startGA = () => {
  ReactGA.initialize(NEONTRIBE_GA)
}

const stopGA = () => {
  ReactGA.ga('remove')
  Cookies.remove('_ga')
  Cookies.remove('_gid')
  Cookies.remove('_gat')
}

const CookieConsentBanner = () => {
  const [isBannerOpen, setIsBannerOpen] = React.useState(false)
  const [hasTrackedView, setHasTrackedView] = React.useState(false)
  const [acceptanceCookie, setAcceptanceCookie] = React.useState(
    Cookies.get(ACCEPTANCE_COOKIE)
  )

  React.useEffect(() => {
    if (acceptanceCookie === 'true') {
      startGA()
    }

    if (acceptanceCookie !== 'true') {
      stopGA()
    }
  }, [acceptanceCookie])

  React.useEffect(() => {
    if (window.ga && !hasTrackedView) {
      ReactGA.pageview(window.location.pathname + window.location.search)
      setHasTrackedView(true)
    }
  }, [hasTrackedView, acceptanceCookie])

  const updateAcceptanceCookie = () => {
    setIsBannerOpen(false)
    setAcceptanceCookie(Cookies.get(ACCEPTANCE_COOKIE))
  }

  const acceptCookies = () => {
    Cookies.set(ACCEPTANCE_COOKIE, true, { expires: 28 * 3 })
    updateAcceptanceCookie()
  }

  const declineCookies = () => {
    Cookies.set(ACCEPTANCE_COOKIE, false)
    updateAcceptanceCookie()
  }

  const acceptanceCookieExists = typeof acceptanceCookie !== 'undefined'

  const displayBanner = !acceptanceCookieExists || isBannerOpen

  return (
    <div>
      <div aria-expanded={displayBanner}>
        {displayBanner && (
          <div className="cookie-banner">
            Can we use cookies to help us improve this site?
            <div className="cookie-content-p2">
              We'd like to use Google Analytics cookies to collect and report
              information on how people use the site. We will use this to help
              us improve our website.
              <br></br>
              Allowing us to use cookies does not allow us to identify you. For
              more information please see our{' '}
              <a href="https://www.neontribe.co.uk/privacy-policy">
                'Privacy Policy'
              </a>{' '}
              page.
            </div>
            <div className="cookie-button-box">
              <a href="#" className="cookie-button yes" onClick={acceptCookies}>
                Accept
              </a>

              <a href="#" className="cookie-button no" onClick={declineCookies}>
                Decline
              </a>
            </div>
          </div>
        )}
      </div>

      {!displayBanner && (
        <button
          onClick={() => setIsBannerOpen(true)}
          className="cookie-sidebar-button"
          aria-controls="cookie-banner"
        >
          <p>Cookie</p>
        </button>
      )}

      <style jsx>{`
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        align-items: stretch;

        .cookie-banner {
          //nav
          background: #effffa;
          height: 100%;
          position: fixed;
          top: 0;
          letter-spacing: 0.015em;
          font-weight: normal;
          disaply: inline-block;
          line-height: 1.5;
          padding: 5px 0px;

          //text
          padding: 2rem;
          letter-spacing: 0;
          color: black;
          text-decoration: none;
          width: 400px;
          flex-basis: 50%;
          text-align: center;
        }

        @media (max-width: 576px) {
          width: 100%;
        }

        .cookie-sidebar-button {
          height: 100%;
          width: 1.5rem;
          position: fixed;
          top: 0;
          background-color: transparent;
        }

        .cookie-button-box {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
        }

        .cookie-button {
          padding: 10px;
          flex-grow: 1;
          margin: 5px;
          font-size: 1rem;
          color: ${c_PRIMARY_TEXT};
          background-color: #9013fe;
          text-align: center;
          display: inline-block;
          text-decoration: none;
        }

        .cookie-button:hover {
          background-color: #6d10c9;
        }

        .cookie-button.no {
          background-color: #620cad;
        }

        .cookie-button.no:hover {
          background-color: #4e0a8a;
        }

        p {
          transform: rotate(90deg);
          color: white;

          position: fixed;
        }

        h1 {
          font-size: 1.5rem;
        }

        .cookie-content-p2 {
          letter-spacing: 0.015em;
          font-weight: normal;
          disaply: inline-block;
          line-height: 1.5;
          padding: 5px 0px;
          text-align: justify;
        }
      `}</style>
    </div>
  )
}

export default CookieConsentBanner
