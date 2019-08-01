import React from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'

import { c_PRIMARY_TEXT, c_PRIMARY_BACKGROUND_ALTERNATIVE } from '../theme'

const Button = ({ onClick, className, children }) => (
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
      <div id="cookie-banner" aria-expanded={displayBanner}>
        {displayBanner && (
          <div className="cookie-banner">
            This site uses cookies, is that cool?
            <div>
              <Button onClick={acceptCookies}>Accept</Button>
              <Button onClick={declineCookies}>Decline</Button>
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
          Change cookie settings
        </button>
      )}

      <style jsx>{`
        .cookie-banner {
          width: 100%;
          max-width: 900px;
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          background-color: ${c_PRIMARY_BACKGROUND_ALTERNATIVE};
          display: flex;
          box-shadow: 0px -10px 20px 0px rgba(0, 0, 0, 0.5);
          padding: 3rem;
          display: flex;
          justify-content: space-between;
        }
        .cookie-sidebar-button {
          color: ${c_PRIMARY_TEXT};
          position: fixed;
          height: 120px;
          width: 120px;
          border: none;
          cursor: pointer;
          left: 0;
          bottom: 0;
          z-index: 9999;
          background-color: ${c_PRIMARY_BACKGROUND_ALTERNATIVE};
          display: flex;
          box-shadow: 10px 0px 20px 0px rgba(0, 0, 0, 0.5);
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}

export default CookieConsentBanner
