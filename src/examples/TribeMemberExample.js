import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import H from '../components/Heading'
import Text from '../components/Text'
import TribeMember from '../components/TribeMember'
import { GUTTER_PX } from '../theme'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import { getImage } from 'gatsby-plugin-image'

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Query = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "images/kenneth.jpg" }
          sourceInstanceName: { eq: "tribers" }
        ) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
      }
    `)

    return (
      <ConstrainedWidth>
        <Text size="medium" weight={700}>
          <H>TribeMember</H>
        </Text>

        <div className="person-example">
          <div className="person-wrapper">
            <TribeMember
              image={getImage(
                data.placeholderImage.childImageSharp.gatsbyImageData
              )}
              name="Kenneth the Shark"
              skills={['Support', 'Cuddle', 'Spying']}
              bio={loremIpsum}
            />
          </div>

          <div className="person-wrapper">
            <TribeMember
              image={getImage(
                data.placeholderImage.childImageSharp.gatsbyImageData
              )}
              name="Kenneth the Shark"
              skills={['Support', 'Cuddle', 'Spying']}
              bio={loremIpsum}
            />
          </div>

          <div className="person-wrapper">
            <TribeMember
              image={getImage(
                data.placeholderImage.childImageSharp.gatsbyImageData
              )}
              name="Kenneth the Shark"
              skills={['Support', 'Cuddle', 'Spying']}
              bio={loremIpsum}
            />
          </div>
        </div>

        <style jsx>{`
          .person-example {
            display: flex;
            flex-wrap: wrap;
          }
          .person-wrapper {
            width: 300px;
            height: 300px;
          }
          .person-wrapper:nth-child(2) {
            height: 400px;
          }
          .person-wrapper:nth-child(3) {
            height: 500px;
          }
          .person-wrapper + .person-wrapper {
            margin-left: ${3 * GUTTER_PX}px;
          }
        `}</style>
      </ConstrainedWidth>
    )
}

export default Query
