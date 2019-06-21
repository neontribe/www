import React from 'react'

import Heading from '../Heading'
import VerticalSpacing from '../VerticalSpacing'
import Text from '../Text'

export default ({ alternate, level, problem, solution }) => {
  // Make sure the text is consistently styled
  const T = props => (
    <Text gutter={0} {...props} type={alternate ? 'secondary' : 'primary'} />
  )

  return (
    <>
      <div>
        <VerticalSpacing size={2} />
        <Heading level={level} size="small">
          <T heavy>Problem</T>
        </Heading>
        <p>
          <T>{problem}</T>
        </p>
        <VerticalSpacing size={2} />
      </div>
      {solution && (
        <div>
          <Heading level={level} size="small">
            <T heavy>Solution</T>
          </Heading>
          <p>
            <T>{solution}</T>
          </p>
        </div>
      )}
      <style jsx>{`
        p {
          margin: 0;
        }
      `}</style>
    </>
  )
}
