import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash.get'

import Carousel from '../components/Carousel'
import Text from '../components/Text'
import H from '../components/Heading'
import VerticalSpacing from '../components/VerticalSpacing'

import RenderContent from '../components/RenderContent'

import logo from '../components/logo.svg'

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
                    image {
                      childImageSharp {
                        fluid(
                          maxWidth: 400
                          maxHeight: 420
                          cropFocus: CENTER
                        ) {
                          src
                        }
                      }
                    }
                  }
                  htmlAst
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const tribers = data.triberStories.nodes.slice(0, 2)

      return (
        <Carousel>
          {tribers.map((triber) => (
            <Carousel.Item
              key={triber.frontmatter.name}
              image={
                get(
                  triber,
                  'frontmatter.story.md.frontmatter.image.childImageSharp.fluid.src'
                ) ||
                get(triber, 'frontmatter.image.childImageSharp.fluid.src') ||
                logo
              }
            >
              <RenderContent
                htmlAst={triber.frontmatter.story.md.htmlAst}
                components={{
                  // avoid dark background from Text
                  p: (props) => <p {...props} />,
                }}
              />

              <VerticalSpacing size={1} />

              <Text size="medium">
                <H>
                  {triber.frontmatter.story.md.frontmatter.name ||
                    triber.frontmatter.name}
                </H>
              </Text>
            </Carousel.Item>
          ))}
        </Carousel>
      )
    }}
  />
)
