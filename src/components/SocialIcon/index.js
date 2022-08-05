import React from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faTwitch,
  faYoutube,
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { c_CALL_TO_ACTION, SOCIAL_ICON_SIZE } from '../../theme'
import { ExternalLink } from '../Link'

const iconMap = {
  twitter: faTwitter,
  github: faGithub,
  twitch: faTwitch,
  instagram: faInstagram,
  facebook: faFacebook,
  youtube: faYoutube,
  linkedin: faLinkedin,
}

const linkMap = {
  twitter: 'https://twitter.com/???',
  github: 'https://github.com/???',
  twitch: 'https://twitch.tv/???',
  instagram: 'https://instagram.com/???',
  facebook: 'https://facebook.com/???',
  youtube: 'https://youtube.com/user/???',
  linkedin: 'https://linkedin.com/in/???',
}

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const { className, styles } = css.resolve`
  * {
    font-size: ${SOCIAL_ICON_SIZE}px;
  }

  svg {
    color: black;
    transition: all 0.15s;
  }

  svg:hover {
    color: ${c_CALL_TO_ACTION};
  }
`

const SocialIcon = ({ site, handle, count, preventTabFocus }) => {
  var icon
  var href

  if (iconMap.hasOwnProperty(site) && linkMap.hasOwnProperty(site)) {
    icon = iconMap[site]
    href = linkMap[site].replace('???', handle)
  }

  // Prevent the click event from bubbling up any further, useful for use in flip cards
  const blockClick = (event) => {
    event.stopPropagation()
  }

  const tooltip = `${handle} on ${capitalize(site)}`

  return (
    <>
      {icon ? (
        <ExternalLink
          href={href}
          newTab
          onClick={blockClick}
          title={tooltip}
          tabIndex={preventTabFocus ? -1 : undefined}
        >
          <FontAwesomeIcon className={className} icon={icon} />
          {styles}
        </ExternalLink>
      ) : (
        ''
      )}
    </>
  )
}

SocialIcon.propTypes = {
  site: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
}

export default SocialIcon
