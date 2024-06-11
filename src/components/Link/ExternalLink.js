import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { className, styles, LinkInternals } from './shared';

const ExternalLink = ({ button, children, newTab, ...linkProps }) => (
  <a
    {...linkProps}
    className={classNames(className, button && 'button')}
    target={newTab ? '_blank' : '_self'}
    rel="noopener noreferrer"
  >
    <LinkInternals button={button}>{children}</LinkInternals>

    {styles}
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  button: PropTypes.bool,
  newTab: PropTypes.bool,
  underline: PropTypes.bool,
};

export default ExternalLink;
