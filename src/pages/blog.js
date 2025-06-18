import React from 'react'
import { graphql } from 'gatsby'
import { formatDistanceToNow, parseISO } from 'date-fns'

import { c_NEON_PURPLE, c_TEXT_DARK } from '../theme'
import { InternalLink } from '../components/Link'
import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import H from '../components/Heading'
import Text from '../components/Text'

import { capitalizeFirstLetter } from '../helpers'
import PageMeta from '../components/PageMeta'
import Section from '../components/Section'
import VerticalSpacing from '../components/VerticalSpacing'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const getDateString = (date) =>
    capitalizeFirstLetter(
      formatDistanceToNow(date, {
        addSuffix: true,
      })
    )

  return (
    <Layout>
      <ConstrainedWidth>
        <VerticalSpacing size={4} />

        <Text size="large" weight="700" align="center">
          <h1>Our Blog</h1>
        </Text>

        <VerticalSpacing size={4} />

        <ul>
          {edges.map(({ node }) => (
            <li key={node.id} className="blog">
              <InternalLink to={`/blog/${node.frontmatter.slug}`}>
                <Section>
                  <Text size="normal">
                    <H>
                      {getDateString(parseISO(node.frontmatter.published_at))}
                    </H>
                  </Text>
                </Section>

                <Text size="large" weight="700">
                  <H>{node.frontmatter.title}</H>
                </Text>
              </InternalLink>
            </li>
          ))}
        </ul>
      </ConstrainedWidth>

      <style jsx>{`
        color: ${c_TEXT_DARK};

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li + li {
          margin-top: 2rem;
        }

        ul :global(.blog > a:hover) {
          color: ${c_NEON_PURPLE};
        }
      `}</style>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { published_at: DESC } }
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

export const Head = ({ location }) => (
  <PageMeta title="Blogs" location={location} />
)

export default BlogPage
