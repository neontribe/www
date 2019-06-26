import React from 'react'
import Text from './Text'

const Paragraph = ({ children, ...props }) => (
  <p>
    <Text {...props}>{children}</Text>
    <style jsx>{`
      p {
        margin: 0;
        margin-bottom: 2rem;
      }
    `}</style>
  </p>
)

export default Paragraph
