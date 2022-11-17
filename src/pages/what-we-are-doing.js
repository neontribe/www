import React from 'react'
import slugify from 'slugify'

import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import H from '../components/Heading'
import Section from '../components/Section'
import Text from '../components/Text'

import VerticalSpacing from '../components/VerticalSpacing'
import WorkDescription from '../components/WorkDescription'
import { ExternalLink } from '../components/Link'
import PageMeta from '../components/PageMeta'

import Container from '../components/Container'

import EmailLink from '../components/EmailLink'
import PageTop from '../components/PageTop'

const WhatWeAreDoingPage = () => (
  <Layout>
    <PageMeta
      title="What we do"
      description="Neontribe is a digital agency. We research for context. We design for use. We code to completion. We test to exhaustion. Then we engineer enhancement."
    />
    <PageTop>
      <ConstrainedWidth>
        <Text size="xlarge" color="#48e9ce">
          <h1>Explore our projects</h1>
        </Text>

        <Container justifyContent="space-between" projectFlex="column">
          <Text size="normal">
            <p className="sub-heading">
              Neontribe help people provide better digital services. We work
              with you to understand your users' needs and we produce digital
              tools including code,content and design
            </p>
          </Text>

          {/* <div className="heading-arc">
            <img src={circles} height={128} width={277} />{' '}
          </div> */}
        </Container>

        <VerticalSpacing size={3} />
        <div>
          <p>Browse our favourite projects to find out more</p>
        </div>
      </ConstrainedWidth>
    </PageTop>
    <VerticalSpacing size={10} />

    <VerticalSpacing size={10} />

    <VerticalSpacing size={4} />

    <Section>
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
                  solution
                  client

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
          return data.projects.nodes.map((project, index) => (
            <React.Fragment key={project.frontmatter.title}>
              {index !== 0 ? (
                <>
                  <VerticalSpacing size={8} />

                  <VerticalSpacing size={8} />
                </>
              ) : null}

              <WorkDescription
                id={slugify(project.frontmatter.title, '-')}
                fluid={project.frontmatter.image.childImageSharp.fluid}
                title={project.frontmatter.title}
                client={project.frontmatter.client}
                imagePosition={index % 2 === 0 ? 'left' : 'right'}
                problem={project.frontmatter.problem}
                solution={project.frontmatter.solution}
                // fund={project.frontmatter.fund}
                // budget={project.frontmatter.budget}
                // timescale={project.frontmatter.timescale}
              />
            </React.Fragment>
          ))
        }}
      />
    </Section>

    <VerticalSpacing size={10} />

    <ConstrainedWidth paddingLeft="2.4rem">
      <Text size="large" color="black">
        <H>Get in touch</H>
      </Text>
      <VerticalSpacing size={3} />
      <Container projectFlex="column">
        <div>
          <Text size="normal" color="black" maxCharacter="49ch">
            Filler copy- why/ when they should get in touch/ when to expect a
            reply- do we have a multiple ways to contact block here or stick
            with just the email funnel?
          </Text>

          <VerticalSpacing size={5} />

          <EmailLink
            link="mailto:hello@neontribe.co.uk"
            background="#5600ee"
            border_color="#5600ee"
            mobileSize="0.9rem"
          >
            Email: hello@neontribe.co.uk
          </EmailLink>
        </div>
        {/* <div className="footer-arc">
          <img src={Arcs} height={136} width={191} />
        </div> */}
      </Container>
    </ConstrainedWidth>

    <style jsx>{`
      .logo {
        height: 1.5rem;
        width: 100%;
      }

      .sub-heading {
        line-height: 2;
        max-width: 56ch;
      }

      .heading-arc {
        padding-bottom: 0.5rem;
        padding-right: 2rem;
        justify-content: space-between;
      }

      .footer-arc {
        padding-left: 10rem;
        padding-bottom: 4rem;
      }

      @media (max-width: 860px) {
        .heading-arc {
          padding-right: 0;
          padding-top: 2rem;
        }

        .sub-heading {
          padding-top: 1rem;
        }

        .footer-arc {
          padding: 0;
          display: flex;
          justify-content: center;
        }
      }
    `}</style>
  </Layout>
)

export default WhatWeAreDoingPage
