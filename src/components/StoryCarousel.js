import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash.get'

import Carousel from '../components/Carousel'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import Heading from '../components/Heading'

import RenderContent from '../components/RenderContent'

import logo from '../components/Logo/logo.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        triberStories: allMarkdownRemark(
          sort: { fields: [fileAbsolutePath] }
          filter: {
            fields: { sourceName: { eq: "tribers" } }
            frontmatter: { story: { id: { ne: null } }, type: { ne: "story" } }
          }
        ) {
          nodes {
            frontmatter {
              image {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 420, cropFocus: CENTER) {
                    src
                  }
                }
              }
              name
              story {
                md: childMarkdownRemark {
                  frontmatter {
                    name
                  }
                  htmlAst
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const tribers = data.triberStories.nodes.slice(0, 3)

      return (
        <Carousel>
          {tribers.map(triber => (
            <Carousel.Item
              key={triber.frontmatter.name}
              image={
                get(triber, 'frontmatter.image.childImageSharp.fluid.src') ||
                logo
              }
            >
              <RenderContent
                htmlAst={triber.frontmatter.story.md.htmlAst}
                type="secondary"
              />
              <VerticalSpacing size={1} />
              <Heading level={3} size="medium">
                <Text size="medium" type="secondary" heavy>
                  {triber.frontmatter.story.md.frontmatter.name ||
                    triber.frontmatter.name}
                </Text>
              </Heading>
            </Carousel.Item>
          ))}
        </Carousel>
      )
    }}
  />
)
