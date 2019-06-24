import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/Link'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import { distanceInWordsToNow } from 'date-fns'

import { capitalizeFirstLetter } from '../helpers'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const getDateString = date =>
    capitalizeFirstLetter(
      distanceInWordsToNow(date, {
        addSuffix: true,
      })
    )

  return (
    <Layout>
      <ConstrainedWidth>
        <Heading level={1} size="xxlarge">
          Our Blog
        </Heading>
        <ul>
          {edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                <Heading level={3} size="small">
                  {getDateString(new Date(node.frontmatter.published_at))}
                </Heading>
                <Heading level={2} size="xlarge">
                  {node.frontmatter.title}
                </Heading>
              </Link>
            </li>
          ))}
        </ul>
      </ConstrainedWidth>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
        }
        ul li {
          margin: 8rem 0;
        }
      `}</style>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___published_at] }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            published_at
          }
        }
      }
    }
  }
`

export default BlogPage
