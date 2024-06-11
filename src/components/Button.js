import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import { navigate as NavTrial } from 'gatsby';
import {
  c_NEON_TEAL,
  c_TEXT_DARK,
  c_TEXT_LIGHT,
  FONT_SECONDARY,
} from '../theme';

const StyledLink = ({
  background,
  border_color,
  buttonWidth,
  children,
  connect,
  margin_left,
  mobileSize,
}) => (
  <>
    <button
      onClick={() => {
        NavTrial(connect);
      }}
    >
      {children}
    </button>
    <style jsx>{`
      button {
        ${background ? `background-color: ${background};` : ''}
        ${border_color ? `border-color: ${border_color};` : ''}
        ${margin_left ? `margin-left: ${margin_left};` : ''}
        border-radius: 350px;
        border-style: solid;
        color: ${c_TEXT_LIGHT};
        cursor: pointer;
        font-family: ${FONT_SECONDARY};
        font-size: 1.25rem;
        font-weight: 700;
        text-align: center;

        max-width: 200ch;
        padding: 0.5rem 2rem;
      }

      button:hover {
        background-color: ${c_NEON_TEAL};
        border-color: ${c_NEON_TEAL};
        color: ${c_TEXT_DARK};
      }

      @media (max-width: 860px) {
        button {
          ${buttonWidth ? `width: ${buttonWidth};` : ''}
          margin-bottom: 2rem;
          ${mobileSize ? `font-size: ${mobileSize};` : ''}
        }
      }
    `}</style>
  </>
);
Text.propTypes = {
  background: PropTypes.string,
  border_color: PropTypes.string,
  buttonWidth: PropTypes.string,
  children: PropTypes.node,
  connect: PropTypes.string,
  margin_left: PropTypes.string,
  mobileSize: PropTypes.string,
};

export default StyledLink;
