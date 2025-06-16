import React from 'react'
import slugify from 'slugify'

import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import ConstrainedWidth from '../components/Layout/ConstrainedWidth'
import contactArcs from '../components/contactArcs.svg'
import H from '../components/Heading'
import Section from '../components/Section'
import Text from '../components/Text'

import VerticalSpacing from '../components/VerticalSpacing'
import WorkDescription from '../components/WorkDescription'
import threeArcs from '../components/threeArcs.svg'
import PageMeta from '../components/PageMeta'
import { getImage } from 'gatsby-plugin-image'

import Container from '../components/Container'

import EmailLink from '../components/EmailLink'
import PageTop from '../components/PageTop'
// TODO: Fill what is currently commented out with copy
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
        <VerticalSpacing size={3} />

        <Container justifyContent="space-between" mobileFlexDirection="column">
          <Text size="normal">
            <p className="sub-heading">
              Neontribe help people provide better digital services. We work
              with you to understand your users' needs and we produce digital
              tools including code, content and design
            </p>
          </Text>

          <div className="heading-arc">
            <img alt="" src={threeArcs} height={128} width={277} />{' '}
          </div>
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
                  caseStudy

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
                image={getImage(
                  project.frontmatter.image.childImageSharp.gatsbyImageData
                )}
                title={project.frontmatter.title}
                client={project.frontmatter.client}
                imagePosition={index % 2 === 0 ? 'left' : 'right'}
                problem={project.frontmatter.problem}
                solution={project.frontmatter.solution}
                caseStudy={project.frontmatter.caseStudy}
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
      <Container mobileFlexDirection="column">
        <div>
          <Text size="normal" color="black" maxCharacter="49ch">
            Interested in working with us? Please feel free to get in touch via
            email.
          </Text>

          <VerticalSpacing size={5} />

          <EmailLink
            link="mailto:hello@neontribe.co.uk"
            background_color="#5600ee"
            border_color="#5600ee"
            fontSize="0.9rem"
          >
            Email: hello@neontribe.co.uk
          </EmailLink>
          <VerticalSpacing size={5} />
        </div>
        <div className="footer-arc">
          <img alt="" src={contactArcs} height={136} width={191} />
        </div>
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
          align-self: center;
        }

        .sub-heading {
          padding-top: 1rem;
          max-width: 100%;
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
