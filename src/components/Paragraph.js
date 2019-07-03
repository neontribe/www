import React from 'react'
import Text from './Text'

const Paragraph = ({ children, ...props }) => (
  <p>
    <Text display="inline" {...props}>
      {children}
    </Text>
    <style jsx>{`
      p {
        margin: 0;
        margin-bottom: 2rem;
      }
    `}</style>
  </p>
)

Paragraph.propTypes = {
  ...Text.propTypes,
}

export default Paragraph
