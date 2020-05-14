import React from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'

import {
  c_PRIMARY_TEXT,
  c_PRIMARY_BACKGROUND_ALTERNATIVE,
  c_PRIMARY_BACKGROUND,
} from '../theme'
import Text from './Text'
import VerticalSpacing from './VerticalSpacing'
import Heading from './Heading'

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
            <Heading level={2}>
              <Text weight={500} size="medium" transparent type="secondary">
                Can we use cookies to help us improve this site?
              </Text>
            </Heading>
            <p>
              <Text transparent type="secondary">
                We'd like to use Google Analytics cookies to collect and report
                information on how people use the site. We will use this to help
                us improve our website.
              </Text>
            </p>
            <p>
              <Text transparent type="secondary">
                Allowing us to use cookies does not allow us to identify you.
                For more information please see our{` `}
                <a href="https://www.neontribe.co.uk/privacy-policy">
                  'Privacy Policy'
                </a>{' '}
                page.
              </Text>
            </p>
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
      </div>

      {!displayBanner && (
        <button
          onClick={() => setIsBannerOpen(true)}
          className="cookie-sidebar-button"
          aria-controls="cookie-banner"
        >
          Cookie
        </button>
      )}

      <style jsx>{`
        .cookie-banner {
          background: #effffa;
          flex-direction: column;
          height: 100%;
          padding: 2rem;
          position: fixed;
          min-width: 300px;
          top: 0;
          width: 25%;
          z-index: 2;
        }

        @media (max-width: 576px) {
          width: 100%;
        }

        .cookie-sidebar-button {
          background-color: transparent;
          color: white;
          height: 100%;
          position: fixed;
          top: 0;
          width: 1.5rem;
        }

        .cookie-button-box {
          align-items: center;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        }

        .cookie-button {
          background-color: #9013fe;
          border: none;
          color: ${c_PRIMARY_TEXT};
          padding: 10px;
        }

        .cookie-button:hover {
          background-color: #6d10c9;
        }
      `}</style>
    </div>
  )
}

export default CookieConsentBanner
