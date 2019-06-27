import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import Heading from '../components/Heading'
import Link, { ExternalLink } from '../components/Link'
import { WorkSummary } from '../components/WorkDescription'

import SquiggleSeparator from '../components/SquiggleSeparator'
import RenderContent from '../components/RenderContent'

import logo from '../components/Logo/logo.svg'

const randomItem = items => items[Math.floor(Math.random() * items.length)]

const IndexPage = () => (
  <Layout>
    <ConstrainedWidth>
      <section className="centered">
        <Heading level={1}>
          <Text heavy size="xlarge">
            We solve problems
          </Text>
        </Heading>
        <p>
          <Text size="medium">
            Neontribe is a digital agency working in user research, software
            development and design. We're agile by instinct, and user-centred in
            our practise. We work together to identify and deliver on user need.
          </Text>
        </p>
      </section>
      <SquiggleSeparator />

      <section className="centered">
        <Heading level={1}>
          <Text heavy size="large">
            The tribe
          </Text>
        </Heading>
        <StaticQuery
          query={graphql`
            query {
              triberStories: allMarkdownRemark(
                sort: { fields: [fileAbsolutePath] }
                filter: {
                  fields: { sourceName: { eq: "tribers" } }
                  frontmatter: {
                    story: { id: { ne: null } }
                    type: { ne: "story" }
                  }
                }
              ) {
                nodes {
                  frontmatter {
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
                      get(
                        triber,
                        'frontmatter.image.childImageSharp.fluid.src'
                      ) || logo
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
      </section>

      <section className="centered">
        <Link button to="/">
          Meet the tribe
        </Link>
      </section>

      <SquiggleSeparator />

      <section>
        <div className="centered">
          <Heading level={1}>
            <Text size="large" heavy>
              What we're doing
            </Text>
          </Heading>
        </div>

        <VerticalSpacing size={5} />

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

        <VerticalSpacing size={5} />

        <div className="centered">
          <Link to="/" button>
            View our solution
          </Link>
        </div>
      </section>

      <SquiggleSeparator />

      <section className="centered">
        <Heading level={1}>
          <Text size="large" heavy>
            Get in touch
          </Text>
        </Heading>

        <VerticalSpacing size={1} />

        <ExternalLink href="mailto:hello@neontribe.co.uk">
          <Text size="medium">hello@neontribe.co.uk</Text>
        </ExternalLink>
      </section>
    </ConstrainedWidth>

    <style jsx>{`
      .centered {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default IndexPage
