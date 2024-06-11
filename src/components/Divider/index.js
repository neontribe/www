import React from 'react';

import divider from './divider.svg';

const Divider = () => (
  <>
    <img className="divider" src={divider} alt="" />

    <style jsx>{`
      .divider {
        display: block;
        height: 5rem;
        width: 5rem;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </>
);

export default Divider;
