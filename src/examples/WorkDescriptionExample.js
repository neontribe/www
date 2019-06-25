import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import WorkDescription, { WorkSummary } from '../components/WorkDescription'
import Heading from '../components/Heading'
import Text from '../components/Text'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`
const WorkDescriptionExample = ({ fluid }) => (
  <div className="work-description">
    <ConstrainedWidth>
      <Heading level={2}>
        <Text size="medium">WorkDescription</Text>
      </Heading>
    </ConstrainedWidth>

    <WorkSummary
      fluid={fluid}
      level={3}
      title="Helping more young families get fresh fruit and veg"
      problem={loremIpsum}
    />
    <WorkSummary
      alternate
      fluid={fluid}
      level={3}
      title="Helping more young families get fresh fruit and veg"
      problem={loremIpsum}
    />
    <WorkDescription
      fluid={fluid}
      level={3}
      title="Helping more young families get fresh fruit and veg"
      subtitle="Delivering simple technology for the Rose Voucher scheme"
      problem={loremIpsum}
      solution={loremIpsum}
    />
    <WorkDescription
      fluid={fluid}
      alternate
      level={3}
      title="Quis nostrud exercitation ullamco laboris nisi u"
      subtitle="Delivering simple technology for the Rose Voucher scheme"
      problem={loremIpsum + ' ' + loremIpsum}
      solution={loremIpsum + ' ' + loremIpsum}
    />
    <style jsx>{``}</style>
  </div>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "ourwork-arc.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <WorkDescriptionExample
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)
