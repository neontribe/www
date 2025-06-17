import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import slugify from 'slugify'

import VerticalSpacing from '../components/VerticalSpacing'
import { WorkSummary } from '../components/WorkDescription'
import { InternalLink } from '../components/Link'
import { getImage } from 'gatsby-plugin-image'

const randomItem = (items) => items[Math.floor(Math.random() * items.length)]

const RandomProject = () => {
  const data = useStaticQuery(graphql`
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
                gatsbyImageData(
                  width: 768
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `)

  const randProj = randomItem(data.projects.nodes)

  return (
    <>
      <WorkSummary
        title={randProj.frontmatter.title}
        problem={randProj.frontmatter.problem}
        image={getImage(
          randProj.frontmatter.image.childImageSharp.gatsbyImageData
        )}
      />

      <VerticalSpacing size={5} />

      <InternalLink
        to={`/our-work#${slugify(randProj.frontmatter.title, '-')}`}
        button
      >
        View our solution
      </InternalLink>
    </>
  )
}

export default RandomProject
