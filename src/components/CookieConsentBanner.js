import React from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'

import { c_PRIMARY_TEXT, c_PRIMARY_BACKGROUND_ALTERNATIVE } from '../theme'

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
            Can we use cookies to help us improve this site? We'd like to use
            Google Analytics cookies to collect and report information on how
            people use the site. We will use this to help us improve our
            website. Allowing us to use cookies does not allow us to identify
            you. For more information please see our 'Privacy Policy' page.
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
          <p>Cookie</p>
        </button>
      )}

      <style jsx>{`
        .cookie-banner {
          //nav
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #effffa;
          height: 100%;
          position: fixed;
          top: 0;
          //words editting
          padding: 2rem ;
          letter-spacing: 0;
          color: black;
          text-decoration: none;
          width: 300px;
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
          transition: 0.5s
          }


        p {
          transform: rotate(90deg);
          color: white;
        }
      `}</style>
    </div>
  )
}

export default CookieConsentBanner
