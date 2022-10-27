import React from 'react'
import { graphql } from 'gatsby'
import { distanceInWordsToNow, parse } from 'date-fns'

import { InternalLink } from '../components/Link'
import Layout from '../components/Layout'

import H from '../components/Heading'
import Text from '../components/Text'
import BlogConstrainedWidth from '../components/Layout/BlogConstrainedWidth'
import { capitalizeFirstLetter } from '../helpers'
import PageMeta from '../components/PageMeta'
import VerticalSpacing from '../components/VerticalSpacing'
import Top from '../components/Top'
import BlueText from '../components/BlueText'
import Container from '../components/Container'
import arcs from '../components/blogArcs.svg'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const getDateString = (date) =>
    capitalizeFirstLetter(
      distanceInWordsToNow(date, {
        addSuffix: true,
      })
    )

  return (
    <Layout>
      <PageMeta
        title="What we do"
        description="Neontribe is a digital agency. We research for context. We design for use. We code to completion. We test to exhaustion. Then we engineer enhancement."
      />
      <Top>
        <div className="blog-top">
          <Container
            align="center"
            justifyContent="space-between"
            projectFlex="column"
          >
            <div>
              <BlueText size="larger" color="#48e9ce">
                Our Blog
              </BlueText>
              <VerticalSpacing size={4} />

              <Text size="normal">
                <p className="sub-heading">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo.
                </p>
              </Text>
            </div>

            <div className="heading-arc">
              <img src={arcs} height={173} width={375} />{' '}
            </div>
          </Container>
        </div>
      </Top>

      <VerticalSpacing size={4} />

      <ul>
        {edges.map(({ node }) => (
          <li key={node.id}>
            <InternalLink to={`/blog/${node.frontmatter.slug}`}>
              <BlogConstrainedWidth background="white">
                <div className="title">
                  <Text size="large" weight={700}>
                    <H>{node.frontmatter.title}</H>
                  </Text>
                </div>
                <Container
                  justifyContent="space-between"
                  paddingTop="2rem"
                  paddingRight="2rem"
                >
                  <div className="blog-preview">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur
                  </div>

                  <Text size="small" color="black">
                    <h3>
                      Posted:{' '}
                      {getDateString(parse(node.frontmatter.published_at))}
                    </h3>
                  </Text>
                </Container>
              </BlogConstrainedWidth>
            </InternalLink>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li + li {
          margin-top: 2rem;
        }

        .blog-top {
          margin-left: 20rem;

          padding-bottom: 2rem;
        }

        .blog-preview {
          color: black;

          padding-left: 2rem;
          padding-bottom: 2rem;
          max-width: 77ch;
        }

        .sub-heading {
          max-width: 50ch;
          line-height: 2;
        }

        .heading-arc {
          display: flex;
          place-self: flex-end;
        }

        .title {
          width: 100%;
          background-color: #561dee;
          padding: 1rem;
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
