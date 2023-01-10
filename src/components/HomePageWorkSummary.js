import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import slugify from 'slugify'

import VerticalSpacing from '../components/VerticalSpacing'
import { WorkSummary } from '../components/WorkDescription'
import { InternalLink } from '../components/Link'

const randomItem = (items) => items[Math.floor(Math.random() * items.length)]

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
    render={(data) => {
      const randProj = randomItem(data.projects.nodes)

      return (
        <React.Fragment>
          <WorkSummary
            title={randProj.frontmatter.title}
            problem={randProj.frontmatter.problem}
            fluid={randProj.frontmatter.image.childImageSharp.fluid}
          />

          <VerticalSpacing size={5} />

          <InternalLink
            to={`/our-work#${slugify(randProj.frontmatter.title, '-')}`}
            button
          >
            View our solution
          </InternalLink>
        </React.Fragment>
      )
    }}
  />
)
