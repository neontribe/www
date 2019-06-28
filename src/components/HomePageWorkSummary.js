import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { WorkSummary } from '../components/WorkDescription'

const randomItem = items => items[Math.floor(Math.random() * items.length)]

export default () => (
  <StaticQuery
    query={graphql`
      query {
        projects: allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "projects" } } }
        ) {
          nodes {
            frontmatter {
              title
              problem
              image {
                childImageSharp {
                  fluid(maxWidth: 768) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const randProj = randomItem(data.projects.nodes)

      return (
        <WorkSummary
          level={2}
          title={randProj.frontmatter.title}
          problem={randProj.frontmatter.problem}
          fluid={randProj.frontmatter.image.childImageSharp.fluid}
          alternate
        />
      )
    }}
  />
)
