import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Heading from '../components/Heading'
import TribeMember from '../components/TribeMember'
import { GUTTER_PX } from '../theme'

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

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "tribe-alex.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="person-example">
        <Heading level={2} size="medium" />
        <div className="person-wrapper">
          <TribeMember
            fluid={data.placeholderImage.childImageSharp.fluid}
            name="Alex Moore"
            headingLevel={3}
            skills={['UX', 'HTML/CSS', 'JavaScript']}
          />
        </div>
        <div className="person-wrapper">
          <TribeMember
            fluid={data.placeholderImage.childImageSharp.fluid}
            name="Alex Moore"
            headingLevel={3}
            skills={['UX', 'HTML/CSS', 'JavaScript']}
          />
        </div>
        <div className="person-wrapper">
          <TribeMember
            fluid={data.placeholderImage.childImageSharp.fluid}
            name="Alex Moore"
            headingLevel={3}
            skills={['UX', 'HTML/CSS', 'JavaScript']}
          />
        </div>

        <style jsx>{`
          .person-example {
            display: flex;
            flex-wrap: wrap;
          }
          .person-wrapper {
            width: 300px;
          }
          .person-wrapper + .person-wrapper {
            margin-left: ${3 * GUTTER_PX}px;
          }
        `}</style>
      </div>
    )}
  />
)
