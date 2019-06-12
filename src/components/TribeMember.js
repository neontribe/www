import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const tribers = [
  'tribe-alex.jpg',
  'tribe-amanda.jpg',
  'tribe-andy.jpg',
  'tribe-charlie.jpg',
  'tribe-ed.jpg',
  'tribe-george.jpg',
  'tribe-harry.jpg',
  'tribe-holly.jpg',
  'tribe-kara.jpg',
  'tribe-karl.jpg',
  'tribe-kat.jpg',
  'tribe-katja.jpg',
  'tribe-matt.jpg',
  'tribe-neil.jpg',
  'tribe-nick.jpg',
  'tribe-ollie.jpg',
  'tribe-rob.jpg',
  'tribe-rose.jpg',
  'tribe-rupert.jpg',
  'tribe-steve.jpg',
  'tribe-toby.jpg',
]
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
        placeholderImage: file(relativePath: { eq: "tribe-ed.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
