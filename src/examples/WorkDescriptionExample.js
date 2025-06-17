import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import WorkDescription, { WorkSummary } from '../components/WorkDescription'
import H from '../components/Heading'
import Text from '../components/Text'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import { getImage } from 'gatsby-plugin-image'

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

const WorkDescriptionExample = ({ image }) => (
  <div className="work-description">
    <ConstrainedWidth>
      <Text size="medium">
        <H>WorkDescription</H>
      </Text>
    </ConstrainedWidth>

    <WorkSummary
      image={image}
      title="Helping more young families get fresh fruit and veg"
      problem={loremIpsum}
    />
    <WorkSummary
      image={image}
      title="Helping more young families get fresh fruit and veg"
      problem={loremIpsum}
    />
    <WorkDescription
      image={image}
      title="Helping more young families get fresh fruit and veg"
      subtitle="Delivering simple technology for the Rose Voucher scheme"
      problem={loremIpsum}
      solution={loremIpsum}
    />
    <WorkDescription
      image={image}
      title="Quis nostrud exercitation ullamco laboris nisi u"
      subtitle="Delivering simple technology for the Rose Voucher scheme"
      problem={loremIpsum + ' ' + loremIpsum}
      solution={loremIpsum + ' ' + loremIpsum}
    />
  </div>
)

const Query = () => {
  const data= useStaticQuery(graphql`
      {
        file(
          relativePath: { eq: "images/arc.jpg" }
          sourceInstanceName: { eq: "projects" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 768
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    `)

    return (
      <WorkDescriptionExample
        image={getImage(data.file.childImageSharp.gatsbyImageData)}
      />
    )
}

export default Query
