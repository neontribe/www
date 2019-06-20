import React from 'react'

import WorkDescription from '../components/WorkDescription'
import Heading from '../components/Heading'
import Text from '../components/Text'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`
export default () => (
  <div className="work-description">
    <ConstrainedWidth>
      <Heading level={2} size="medium">
        <Text>WorkDescription</Text>
      </Heading>
    </ConstrainedWidth>

    <WorkDescription
      level={3}
      title="Mind of my Own"
      subtitle="At vero eos at accusam et justo duo dolores et ea rebum"
      problem={loremIpsum}
      solution={loremIpsum}
    />
    <WorkDescription
      alternate
      level={3}
      title="NCVO"
      subtitle="At vero eos at accusam et justo duo dolores et ea rebum"
      problem={loremIpsum + ' ' + loremIpsum}
      solution={loremIpsum + ' ' + loremIpsum}
    />
    <style jsx>{``}</style>
  </div>
)
