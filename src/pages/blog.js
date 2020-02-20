import React from 'react'
import { graphql } from 'gatsby'
import { distanceInWordsToNow, parse } from 'date-fns'

import { InternalLink } from '../components/Link'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Heading from '../components/Heading'
import Text from '../components/Text'
import SquiggleSeparator from '../components/SquiggleSeparator'
import Centered from '../components/Centered'

import { capitalizeFirstLetter } from '../helpers'
import PageMeta from '../components/PageMeta'

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
      <PageMeta title="Blogs" />
      <ConstrainedWidth>
        <Centered>
          <Heading level={1}>
            <Text size="xlarge" weight={700}>
              Our Blog
            </Text>
          </Heading>
        </Centered>
        <SquiggleSeparator />
        <ul>
          {edges.map(({ node }) => (
            <li key={node.id}>
              <InternalLink to={`/blog/${node.frontmatter.slug}`}>
                <Heading level={3} size="small">
                  <Text size="normal">
                    {getDateString(parse(node.frontmatter.published_at))}
                  </Text>
                </Heading>
                <Heading level={2}>
                  <Text size="large" weight={700}>
                    {node.frontmatter.title}
                  </Text>
                </Heading>
              </InternalLink>
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
          margin: 0;
        }
      `}</style>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___published_at] }
      filter: { fields: { sourceName: { eq: "blog-posts" } } }
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
