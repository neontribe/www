import React from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'

import {
  breakpoint,
  c_COOKIE_BACKGROUND,
  c_CALL_TO_ACTION,
  c_CALL_TO_ACTION_HOVER,
  c_TEXT_DARK,
  FONT_SECONDARY,
  c_TEXT_LIGHT,
} from '../theme'
import Text from './Text'
import VerticalSpacing from './VerticalSpacing'
import { InternalLink } from './Link'

const ACCEPTANCE_COOKIE = 'neontribe-cookies-accept'
const NEONTRIBE_GA = 'UA-30970110-1'

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
  const [acceptanceCookie, setAcceptanceCookie] = React.useState(false)

  // #438: perform check client side to avoid cookie banner briefly appearing
  React.useEffect(() => {
    setAcceptanceCookie(Cookies.get(ACCEPTANCE_COOKIE))
  }, [])

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
    <>
      <aside>
        <button
          onClick={() => setIsBannerOpen(true)}
          className="cookie-sidebar-button"
          aria-expanded={isBannerOpen}
        >
          Change Cookie Preferences
        </button>

        {displayBanner && (
          <div className="cookie-banner">
            <Text size="medium">
              <h2>Can we use cookies to help us improve this site?</h2>
            </Text>

            <VerticalSpacing size={2} />

            <p>
              We'd like to use Google Analytics cookies to collect and report
              information on how people use the site. We will use this to help
              us improve our website.
            </p>
            <p>
              Allowing us to use cookies does not allow us to identify you. For
              more information please see our{` `}
              <InternalLink to="/privacy-policy">
                <span className="link">'Privacy Policy'</span>
              </InternalLink>{' '}
              page.
            </p>

            <VerticalSpacing size={2} />

            <div className="cookie-button-box">
              <button className="cookie-button" onClick={acceptCookies}>
                Accept
              </button>
              <button className="cookie-button no" onClick={declineCookies}>
                Decline
              </button>
            </div>
          </div>
        )}
      </aside>

      <style jsx>{`
        .link {
          text-decoration: underline;
        }

        .cookie-sidebar-button {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 5;
          padding: 1rem;
          cursor: pointer;
          border-radius: 25px;
          background: rgba(0, 0, 0, 0.7);
          font: inherit;
          color: inherit;
          border: none;
        }

        .cookie-banner {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          background: ${c_COOKIE_BACKGROUND};
          padding: 2rem;
          z-index: 10;
          color: ${c_TEXT_DARK};
        }

        .cookie-button-box {
          align-items: center;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        }

        .cookie-button {
          color: ${c_TEXT_LIGHT};
          border: none;
          vertical-align: middle;
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 60px;
          font-family: ${FONT_SECONDARY};
          background-color: ${c_CALL_TO_ACTION};
          cursor: pointer;
        }

        .cookie-button:hover {
          background-color: ${c_CALL_TO_ACTION_HOVER};
        }

        @media (${breakpoint('sm')}) {
          .cookie-banner {
            flex-direction: column;
            height: 100%;
            top: 0;
            width: 25%;
            min-width: 300px;
          }
        }
      `}</style>
    </>
  )
}

export default CookieConsentBanner
