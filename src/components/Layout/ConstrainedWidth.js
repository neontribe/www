import { PAGE_WIDTH_REM } from '../../theme';
import PropTypes from 'prop-types';
import React from 'react';

const ConstrainedWidth = ({ children, paddingTop, mobilePaddingBottom }) => (
  <div className="constrained-container">
    {children}

    <style jsx>{`
      .constrained-container {
        width: 100%;
        max-width: ${PAGE_WIDTH_REM};
        margin-left: auto;
        margin-right: auto;
        border-radius: 0 0 38px 0;
        padding-bottom: 2rem;
        ${paddingTop ? `padding-top: ${paddingTop};` : ''}
      }

      @media (max-width: 1120px) {
        .constrained-container {
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }

      @media (max-width: 530px) {
        .constrained-container {
          ${mobilePaddingBottom
            ? `padding-bottom: ${mobilePaddingBottom};`
            : ''}
        }
      }
    `}</style>
  </div>
);

ConstrainedWidth.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.string,
  mobilePaddingBottom: PropTypes.string,
};

export default ConstrainedWidth;
