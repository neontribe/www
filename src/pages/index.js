import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import Text from '../components/Text'
import VerticalSpacing from '../components/VerticalSpacing'
import Heading from '../components/Heading'
import Link, { ExternalLink } from '../components/Link'
import { WorkSummary } from '../components/WorkDescription'

import steve from '../images/tribe-steve.jpg'
import harry from '../images/tribe-harry.jpg'
import kat from '../images/tribe-kat.jpg'
import SquiggleSeparator from '../components/SquiggleSeparator'

const randomItem = items => items[Math.floor(Math.random() * items.length)]

const IndexPage = () => (
  <Layout>
    <ConstrainedWidth>
      <section style={{ textAlign: 'center' }}>
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

      <section style={{ textAlign: 'center' }}>
        <Heading level={1}>
          <Text heavy size="large">
            The tribe
          </Text>
        </Heading>
        <Carousel>
          <Carousel.Item image={steve}>
            <Text type="secondary" size="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
            <VerticalSpacing size={1} />
            <Heading level={3} size="medium">
              <Text size="medium" type="secondary" heavy>
                Rose
              </Text>
            </Heading>
          </Carousel.Item>
          <Carousel.Item image={harry}>
            <Text type="secondary" size="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore ma minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
            <VerticalSpacing size={1} />
            <Heading level={3} size="medium">
              <Text size="medium" type="secondary" heavy>
                Katja
              </Text>
            </Heading>
          </Carousel.Item>
          <Carousel.Item image={kat}>
            <Text type="secondary" size="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
            <VerticalSpacing size={1} />
            <Heading level={3}>
              <Text size="medium" type="secondary" heavy>
                Rob
              </Text>
            </Heading>
          </Carousel.Item>
        </Carousel>
      </section>

      <section style={{ textAlign: 'center' }}>
        <Link button to="/">
          Meet the tribe
        </Link>
      </section>

      <SquiggleSeparator />

      <section>
        <div style={{ textAlign: 'center' }}>
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
                title={randProj.frontmatter.title}
                problem={randProj.frontmatter.problem}
                fluid={randProj.frontmatter.image.childImageSharp.fluid}
                alternate
              />
            )
          }}
        />

        <VerticalSpacing size={5} />

        <div style={{ textAlign: 'center' }}>
          <Link to="" button>
            View our solution
          </Link>
        </div>
      </section>

      <SquiggleSeparator />

      <section style={{ textAlign: 'center' }}>
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
  </Layout>
)

export default IndexPage
