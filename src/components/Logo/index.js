import React from 'react'

import LogoImage from './logo.svg'

export default () => (
  <>
    <img src={LogoImage} alt="Neontribe logo" />
    <style jsx>{`
      img {
        height: auto;
        width: 80px;
      }
    `}</style>
  </>
)
