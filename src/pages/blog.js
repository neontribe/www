import React from 'react'
import { graphql } from 'gatsby'
import { distanceInWordsToNow, parse } from 'date-fns'

import { InternalLink } from '../components/Link'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import H from '../components/Heading'
import Text from '../components/Text'

import { capitalizeFirstLetter } from '../helpers'
import PageMeta from '../components/PageMeta'
import Section from '../components/Section'

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
        <Text size="large" weight={700}>
          <h1>Our Blog</h1>
        </Text>

        <ul>
          {edges.map(({ node }) => (
            <li key={node.id}>
              <InternalLink to={`/blog/${node.frontmatter.slug}`}>
                <Section>
                  <Text size="normal">
                    <H>{getDateString(parse(node.frontmatter.published_at))}</H>
                  </Text>
                </Section>

                <Text size="large" weight={700}>
                  <H>{node.frontmatter.title}</H>
                </Text>
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
