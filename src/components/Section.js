import React, { useContext } from 'react'

import { HeadingContext } from './Heading'

const Section = (props) => {
  const level = useContext(HeadingContext)

  return (
    <HeadingContext.Provider value={level + 1}>
      {props.children}
    </HeadingContext.Provider>)
}

export default Section
